import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.outline};
  width: 25%;
  padding: 15px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserInfo = styled.div``;

export const ProfilePic = styled.div`
  background-color: #c6c6c6;
  border-radius: 20px;
  width: 50px;
  height: 50px;
`;

export const Username = styled.h1``;

export const Score = styled.p`
  color: ${props => props.theme.textLight};
`;

export const ExitButton = styled.button`
  background: none;
  color: ${props => props.theme.danger};
  border: 2px solid ${props => props.theme.danger};
  border-radius: 5px;
  font-size: 20px;
  padding: 8px 8px 7px;
`;
