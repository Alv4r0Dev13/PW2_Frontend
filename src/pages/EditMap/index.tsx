import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  ProfileContainer,
  ProfileContent,
  PostButton,
  InputContainer,
  FlexContainer,
  MapDiv,
  LatLonDiv,
} from './styles';
import axios from '../../services/axios';
import { PostE, StoredUserE, UserE } from '../../utils/entities';
import { getStorage } from '../../services/storage';
import PostContainer from '../../components/PostContainer';
import { imgRoute } from '../../secret';
import MiniProfile from '../../components/MiniProfile';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import iconImg from '../../styles/img/marker.png';
import L from 'leaflet';

interface latLng {
  lat: number;
  lng: number;
}

const messages = [
  'Um lugar interessante!',
  'Você está em um ótimo lugar!',
  'Esta é uma área bonita!',
  'Aproveite a vista!',
  'Explore mais por aqui!',
  'Você mora aqui? que triste...',
  'Ei! cuidado aonde clica!',
  'Tô com fome',
  'Já estive em lugares melhores...',
  'O meu nome é Dom Pedro Terceiro',
  'Como centraliza uma div?',
  'Estou triste...',
  'Eu tento fugir de mim, mas pra onde eu vou, eu estou lá',
];

const EditMaps: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserE>();
  const [randomMessage, setRandomMessage] = useState<string>(messages[0]);

  const customIcon = new L.Icon({
    iconUrl: iconImg,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const [userLocalization, setUserLocalization] = useState<latLng | null>(null);
  const [newUserLocalization, setNewUserLocalization] = useState<latLng | null>(
    null,
  );

  useEffect(() => {
    const storedUser = getStorage('user');
    setUser(storedUser);
    fetchPosts(storedUser);
  }, []);

  const fetchPosts = async (user: StoredUserE) => {
    try {
      const response = await axios.get(`/localizations/user/${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      if (response.data.length > 0) {
        const userLoc: latLng = {
          lat: Number(response.data[0].lat),
          lng: Number(response.data[0].lon),
        };
        setNewUserLocalization(userLoc);
        setUserLocalization(userLoc);
      }
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    }
  };

  async function handleSaveLocalization() {
    const storedUser = getStorage('user');
    if (userLocalization && newUserLocalization) {
      await axios
        .put(
          `/localizations/${storedUser.id}`,
          {
            lat: newUserLocalization.lat.toString(),
            lon: newUserLocalization.lng.toString(),
          },
          { headers: { Authorization: `Bearer ${storedUser.token}` } },
        )
        .then(
          // fulfilled
          () => {
            window.location.reload();
          },
          // rejected
          reason => {
            console.log(reason.response.data.errors);
          },
        )
        .catch(err => {
          console.log(err);
        });
    } else if (newUserLocalization) {
      await axios
        .post(
          '/localizations',
          {
            userId: storedUser.id,
            lat: newUserLocalization.lat.toString().toString(),
            lon: newUserLocalization.lng.toString().toString(),
          },
          { headers: { Authorization: `Bearer ${storedUser.token}` } },
        )
        .then(
          // fulfilled
          () => {
            window.location.reload();
          },
          // rejected
          reason => {
            console.log(reason.response.data.errors);
          },
        )
        .catch(err => {
          console.log(err);
        });
    }
  }

  const handleMarkerDrag = (event: L.DragEndEvent) => {
    const { lat, lng } = event.target.getLatLng();
    setNewUserLocalization({ lat: lat, lng: lng });
  };

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setRandomMessage(messages[randomIndex]);
  };

  return (
    <Container>
      <ProfileContainer>
        <ProfileContent>
          {user ? (
            <MapDiv>
              <MapContainer
                center={userLocalization ? userLocalization : [0, 0]}
                zoom={userLocalization ? 13 : 1}
                style={{ height: 400, width: 'auto', borderRadius: 10 }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                  position={newUserLocalization ? newUserLocalization : [0, 0]}
                  icon={customIcon}
                  draggable={true}
                  eventHandlers={{
                    dragend: handleMarkerDrag,
                    click: getRandomMessage,
                  }}
                >
                  <Popup>{randomMessage}</Popup>
                </Marker>
              </MapContainer>
            </MapDiv>
          ) : (
            <p>Carregando dados do usuário...</p>
          )}
        </ProfileContent>
        <FlexContainer>
          <LatLonDiv>
            <p>Latitude / Longitude</p>
            <InputContainer>
              {newUserLocalization ? (
                <p>
                  {newUserLocalization.lat}°N / {newUserLocalization.lng}°L
                </p>
              ) : (
                <p>Sem coordenadas...</p>
              )}
            </InputContainer>
          </LatLonDiv>
          <PostButton onClick={handleSaveLocalization}>
            Salvar localização
          </PostButton>
        </FlexContainer>
      </ProfileContainer>
    </Container>
  );
};

export default EditMaps;
