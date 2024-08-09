import React, { useState } from 'react';
import { FaCamera, FaMapMarkerAlt, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Container, Title, ProfilePictureContainer, Button, InputContainer, Input, PasswordContainer, Label } from './styles';

const EditProfile: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container>
      <Title>Editar Perfil</Title>
      <ProfilePictureContainer>
        {/* Aqui você pode adicionar uma lógica para exibir a foto atual e permitir o upload de uma nova */}
        <img src="path_to_current_profile_picture" alt="Profile" />
      </ProfilePictureContainer>
      <Button>
        <FaCamera /> Mudar a foto
      </Button>
      <Button>
        <FaMapMarkerAlt /> Editar localização
      </Button>
      <InputContainer>
        <Label htmlFor="name">Nome</Label>
        <Input id="name" type="text" placeholder="Novo nome" />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="new-password">Nova Senha</Label>
        <PasswordContainer>
          <Input
            id="new-password"
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Nova senha"
          />
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
          </button>
        </PasswordContainer>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="confirm-password">Confirmar Senha</Label>
        <PasswordContainer>
          <Input
            id="confirm-password"
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Confirmar senha"
          />
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
          </button>
        </PasswordContainer>
      </InputContainer>
      <Button>Salvar</Button>
    </Container>
  );
};

export default EditProfile;
