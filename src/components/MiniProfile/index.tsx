import { useEffect, useState } from 'react';
import { StoredUserE } from '../../utils/entities';
import { getStorage, removeStorage } from '../../services/storage';
import {
  Container,
  ExitButton,
  InfoContainer,
  ProfilePic,
  Score,
  UserInfo,
  Username,
} from './styles';
import { LogoutOutlined } from '@ant-design/icons';
import LogoutModal from '../LogoutModal';
import { imgRoute } from '../../secret';
import { useNavigate } from 'react-router-dom';

const MiniProfile = () => {
  const [user, setUser] = useState<StoredUserE | null>(null);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    removeStorage('user');
    window.location.reload();
  }

  useEffect(() => {
    const storedUser = getStorage('user');
    setUser(storedUser);
  }, []);

  const handleProfile = () => {
    navigate(`/profile/${user?.id}`)
  }

  return user ? (
    <Container>
      {isLogoutModalOpen && (
        <LogoutModal
          onClose={() => setIsLogoutModalOpen(false)}
          onConfirm={handleLogout}
        />
      )}
      <InfoContainer onClick={handleProfile} style={{ cursor: 'pointer' }} >
        <ProfilePic src={`${imgRoute}${user.profileURL}`} />
        <UserInfo>
          <Username>{user.username}</Username>
          <Score>{user.score} pontos</Score>
        </UserInfo>
      </InfoContainer>
      <ExitButton onClick={() => setIsLogoutModalOpen(true)}>
        <LogoutOutlined />
      </ExitButton>
    </Container>
  ) : (
    <div />
  );
};

export default MiniProfile;
