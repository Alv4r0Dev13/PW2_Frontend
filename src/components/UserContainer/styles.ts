import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  background-color: ${props => props.theme.backgroundLighter};
  border-radius: 15px;
  padding: 20px;
`;

export const ProfilePic = styled.img`
  border-radius: 20px;
  width: 50px;
  height: 50px;
`;

export const UserInfo = styled.div``;

export const Username = styled.h1``;

export const Score = styled.p`
  color: ${props => props.theme.textLight};
`;

