import React, { useEffect, useState } from 'react';
import { FaCamera, FaMapMarkerAlt, FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  Container,
  Title,
  ProfilePictureContainer,
  Button,
  InputContainer,
  Input,
  PasswordContainer,
  Label,
} from './styles';
import { StoredUserE, UserE } from '../../utils/entities';
import { useNavigate } from 'react-router-dom';
import { getStorage, setStorage } from '../../services/storage';
import axios from '../../services/axios';
import { imgRoute } from '../../secret';

const EditProfile: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [user, setUser] = useState<UserE | undefined>(undefined);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [profilePictureURL, setProfilePictureURL] = useState<string>('');

  useEffect(() => {
    const currentUser = getStorage('user') as StoredUserE;

    if (currentUser) {
      setUser(currentUser);
      setName(currentUser.username || '');
      setProfilePictureURL(currentUser.profileURL || '');
    }
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLocalizationClick = () => {
    navigate('/edit-map');
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const currentUser = getStorage('user') as StoredUserE;

      if (file) {
        const formData = new FormData();
        formData.append('pf-picture', file);
        console.log('Enviando nova foto de perfil:', file);

        const response = await axios.post(
          `/users/profilePicture/${currentUser.id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${currentUser.token}`,
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        console.log(response);
        setProfilePictureURL(`/${file.name}`);
      }
    }
  };

  const handleSubmit = async () => {
    const currentUser = getStorage('user') as StoredUserE;

    if (password && password !== confirmPassword) {
      alert('As senhas não correspondem');
      return;
    }

    try {
      const token = currentUser.token;
      const updatedFields: any = {};

      if (name !== currentUser.username) {
        updatedFields.username = name;
      }
      if (password) {
        updatedFields.password = password;
      }
      if (profilePictureURL) {
        updatedFields.profileURL = profilePictureURL;
      }

      if (Object.keys(updatedFields).length > 0) {
        await axios.put(`/users/${currentUser.id}`, updatedFields, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('Perfil atualizado:', updatedFields);
      }

      console.log('Perfil atualizado com sucesso!');
      currentUser.username = name;
      if (profilePictureURL) {
        currentUser.profileURL = profilePictureURL;
      }
      setStorage('user', currentUser);

      navigate(`/profile/${currentUser.id}`);
    } catch (error) {
      console.error('Erro ao atualizar o perfil:', error);
    }
  };

  return (
    <Container>
      <Title>Editar Perfil</Title>
      <ProfilePictureContainer>
        <img src={`${imgRoute}${profilePictureURL}`} alt="Profile" />
      </ProfilePictureContainer>
      <Button>
        <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
          <FaCamera /> Mudar a foto
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </Button>
      <Button onClick={handleLocalizationClick}>
        <FaMapMarkerAlt /> Editar localização
      </Button>
      <InputContainer>
        <Label htmlFor="username">Nome</Label>
        <Input
          id="username"
          type="text"
          placeholder="Novo nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">Nova Senha</Label>
        <PasswordContainer>
          <Input
            id="password"
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Nova senha"
          />
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
          </button>
        </PasswordContainer>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="confirmPassword">Confirmar Senha</Label>
        <PasswordContainer>
          <Input
            id="confirmPassword"
            type={passwordVisible ? 'text' : 'password'}
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Confirmar senha"
          />
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
          </button>
        </PasswordContainer>
      </InputContainer>
      <Button onClick={handleSubmit}>Salvar</Button>{' '}
    </Container>
  );
};

export default EditProfile;
