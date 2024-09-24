import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.outline};
  width: 25%;
  padding: 15px 0;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: rgba(224, 224, 224, 0.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserInfo = styled.div``;

export const ProfilePic = styled.img`
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

  &:hover {
    color: white;
    background-color: ${props => props.theme.danger};
  }
`;
