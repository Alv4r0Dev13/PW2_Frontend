import { useEffect, useState } from 'react';
import { UserE } from '../../utils/entities';
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

const MiniProfile = () => {
  const [user, setUser] = useState<UserE | null>(null);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  function handleLogout() {
    removeStorage('user');
    window.location.reload();
  }

  useEffect(() => {
    const storedUser = getStorage('user');
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
        <ProfilePic>{''}</ProfilePic>
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
