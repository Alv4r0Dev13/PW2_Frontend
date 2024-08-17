import React from 'react';
import { UserComponentI } from '../../utils/components';
import { Container, ProfilePic } from './styles';

const UserContainer: React.FC<UserComponentI> = ({ data }) => {
  return (
    <Container>
      <ProfilePic />
      <h1>{data.username}</h1>
    </Container>
  );
};

export default UserContainer;
