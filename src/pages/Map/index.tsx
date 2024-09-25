import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  ProfileContainer,
  ProfileContent,
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

const Maps: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserE>();
  const [profileURL, setProfileURL] = useState<string | null>(null);
  const [randomMessage, setRandomMessage] = useState<string>(messages[0]);

  const [userLocalization, setUserLocalization] = useState<latLng | null>(null);

  const customIcon = new L.Icon({
    iconUrl: iconImg,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

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
        setUserLocalization(userLoc);
      }
      //console.log("Posts encontrados:", response.data);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    }
  };

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setRandomMessage(messages[randomIndex]);
  };

  return (
    <Container>
      <MiniProfile />
      <ProfileContainer>
        <ProfileContent>
          {user && userLocalization ? (
            <MapDiv>
              <MapContainer
                center={userLocalization ? userLocalization : [0, 0]}
                zoom={13}
                style={{ height: 400, width: 'auto', borderRadius: 10 }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                  position={userLocalization ? userLocalization : [0, 0]}
                  icon={customIcon}
                  eventHandlers={{
                    click: getRandomMessage,
                  }}
                >
                  <Popup>{randomMessage}</Popup>
                </Marker>
              </MapContainer>
            </MapDiv>
          ) : (
            <p>Esse usuário ainda não possui uma localização</p>
          )}
        </ProfileContent>
        <FlexContainer>
          <LatLonDiv>
            <p>Latitude / Longitude</p>
            <InputContainer>
              {userLocalization ? (
                <p>
                  {userLocalization.lat}°N / {userLocalization.lng}°L
                </p>
              ) : (
                <p>Sem coordenadas...</p>
              )}
            </InputContainer>
          </LatLonDiv>
        </FlexContainer>
      </ProfileContainer>
    </Container>
  );
};

export default Maps;
