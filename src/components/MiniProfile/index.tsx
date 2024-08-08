import { useEffect, useState } from 'react';
import { UserE } from '../../utils/entities';
import { getStorage } from '../../services/storage';
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

const MiniProfile = () => {
  const [user, setUser] = useState<UserE | null>(null);

  useEffect(() => {
    const storedUser = getStorage('user');
    setUser(storedUser);
  }, []);

  return user ? (
    <Container>
      <InfoContainer>
        <ProfilePic>{''}</ProfilePic>
        <UserInfo>
          <Username>{user.username}</Username>
          <Score>{user.score} pontos</Score>
        </UserInfo>
      </InfoContainer>
      <ExitButton>
        <LogoutOutlined />
      </ExitButton>
    </Container>
  ) : (
    <div />
  );
};

export default MiniProfile;
