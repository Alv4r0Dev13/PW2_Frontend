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

const MiniProfile = () => {
  const [user, setUser] = useState<StoredUserE | null>(null);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  function handleLogout() {
    removeStorage('user');
    window.location.reload();
  }

  useEffect(() => {
    const storedUser = getStorage('user');
    console.log(storedUser);
    setUser(storedUser);
  }, []);

  return user ? (
    <Container>
      {isLogoutModalOpen && (
        <LogoutModal
          onClose={() => setIsLogoutModalOpen(false)}
          onConfirm={handleLogout}
        />
      )}
      <InfoContainer>
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
