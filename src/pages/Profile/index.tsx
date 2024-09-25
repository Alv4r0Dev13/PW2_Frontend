import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ProfileContainer,
  ProfileContent,
  ProfilePicture,
  ProfileInfo,
  ButtonContainer,
  IconButton,
  PostsSection,
} from './styles';
import axios from '../../services/axios';
import { PostE, UserE } from '../../utils/entities';
import { getStorage, removeStorage } from '../../services/storage';
import PostContainer from '../../components/PostContainer';
import { imgRoute } from '../../secret';
import GeneralModal from '../../components/GeneralModal';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserE>();
  const [posts, setPosts] = useState<PostE[]>([]);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = getStorage('user');
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(storedUser);
      fetchPosts(storedUser.id);
    }
  }, [navigate]);

  const fetchPosts = async (userId: string) => {
    try {
      const response = await axios.get(`/posts/user/${userId}`);
      setPosts(response.data);
      //console.log("Posts encontrados:", response.data);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    }
  };

  const handleEditClick = () => {
    navigate(`/edit-profile/${user?.id}`);
  };

  const handleLocalizationClick = () => {
    navigate(`/map/${user?.id}`);
  };

  const handleDeleteAccount = async () => {
    const storedUser = getStorage('user');
    await axios
      .delete(
        `/users/${storedUser.id}`,
        { headers: { Authorization: `Bearer ${storedUser.token}` } },
      )
      .then(
        // fulfilled
        () => {
          removeStorage('user');
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
  };

  return (
    <ProfileContainer>
      <ProfileContent>
        {deleteModal ? (
          <GeneralModal
            onClose={() => {
              setDeleteModal(false);
            }}
            onConfirm={handleDeleteAccount}
            text={'Você tem certeza que deseja deletar sua conta?'}
            confirmText={'Sim, tenho certeza!'}
            cancelText={'Cancelar'}
          />
        ) : null}
        {user ? (
          <>
            <ProfilePicture
              src={`${imgRoute}${user.profileURL}`}
              alt="Profile Picture"
            />
            <ProfileInfo>
              <h2>{user.username}</h2>
              <p>{user.email}</p>
              <p>Score: {user.score}</p>
            </ProfileInfo>
            <ButtonContainer>
              <IconButton onClick={handleLocalizationClick}>
                <FaMapMarkerAlt /> Localização
              </IconButton>
              <IconButton onClick={handleEditClick}>
                <FaEdit /> Editar
              </IconButton>
              <IconButton
                onClick={() => {
                  setDeleteModal(true);
                }}
                red
              >
                <FaTrashAlt /> Deletar
              </IconButton>
            </ButtonContainer>
          </>
        ) : (
          <p>Carregando dados do usuário...</p>
        )}
      </ProfileContent>

      <PostsSection>
        <h3>Postagens</h3>
        {posts.length > 0 ? (
          posts.map(post => (
            <PostContainer key={post.id} data={post} isButtonEnabled={false} />
          ))
        ) : (
          <p>Este usuário não possui postagens.</p>
        )}
      </PostsSection>
    </ProfileContainer>
  );
};

export default Profile;
