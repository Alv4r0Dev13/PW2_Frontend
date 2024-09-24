import React, { useEffect, useState } from 'react';
import { FaCamera, FaMapMarkerAlt, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Container, Title, ProfilePictureContainer, Button, InputContainer, Input, PasswordContainer, Label } from './styles';
import { StoredUserE, UserE } from '../../utils/entities';
import { useNavigate } from 'react-router-dom';
import { getStorage, setStorage } from '../../services/storage';


const EditProfile: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [user, setUser] = useState<UserE| undefined>(undefined);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [profilePictureURL, setProfilePictureURL] = useState<string>('');

  useEffect(() => {
    const storedUser = getStorage('user') as StoredUserE;
    setUser(storedUser);
    if (storedUser) {
    }
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container>
      <Title>Editar Perfil</Title>
      <ProfilePictureContainer>
        <img src={profilePictureURL || "path_to_current_profile_picture"} alt="Profile" />
        </ProfilePictureContainer>
      <Button>
          <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
          <FaCamera /> Mudar a foto
        </label>
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
