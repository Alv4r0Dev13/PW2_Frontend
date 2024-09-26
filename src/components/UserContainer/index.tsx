import React from 'react';
import { UserComponentI } from '../../utils/components';
import { Container, ProfilePic, UserInfo, Username, Score } from './styles';
import { imgRoute } from '../../secret';
import { useNavigate } from 'react-router-dom';

const UserContainer: React.FC<UserComponentI> = ({ data }) => {

  const navigate = useNavigate();

  const handleProfile = () => {
    navigate(`/profile/${data?.id}`)
  }

  return (
    <Container>
      <ProfilePic src={`${imgRoute}${data.profileURL}`} />
      <UserInfo onClick={handleProfile} style={{ cursor: 'pointer' }}>
        <Username>{data.username}</Username>
        <Score>{data.score} pontos</Score>
      </UserInfo>
    </Container>
  );
};

export default UserContainer;
