import React from 'react';
import { FaMapMarkerAlt, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ProfileContainer, ProfileContent, ProfilePicture, ProfileInfo, ButtonContainer, IconButton, PostsSection } from './styles';

interface ProfileProps {
  name: string;
  email: string;
  score: number;
  profilePictureUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ name, email, score, profilePictureUrl }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/edit-profile');
  };

  return (
    <ProfileContainer>
      <ProfileContent>
        <ProfilePicture src={profilePictureUrl} alt="Profile Picture" />
        <ProfileInfo>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>Score: {score}</p>
        </ProfileInfo>
        <ButtonContainer>
          <IconButton>
            <FaMapMarkerAlt /> Localização
          </IconButton>
          <IconButton onClick={handleEditClick}>
            <FaEdit /> Editar
          </IconButton>
          <IconButton red>
            <FaTrashAlt /> Deletar
          </IconButton>
        </ButtonContainer>
      </ProfileContent>
      <PostsSection>
        <h3>Postagens</h3>
        {/* Filtro de postagens do usuário pode ser adicionado aqui */}
      </PostsSection>
    </ProfileContainer>
  );
};

export default Profile;
