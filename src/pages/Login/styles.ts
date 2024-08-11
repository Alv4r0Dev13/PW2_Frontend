import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid ${props => props.theme.outline};
  border-radius: 10px;
  gap: 20px;
  width: 30%;
  height: 60%;
  padding: 20px;
  margin: auto auto;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const InputContainer = styled.div``;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.danger};
  font-size: 13px;
  margin: 5px 12px 0;
`;

export const AccountMessage = styled.p`
  font-size: 13px;
  text-align: center;
`;

export const MessageLink = styled(Link)`
  color: ${props => props.theme.success};
  display: inline;
`;

export const SendButton = styled.button`
  color: white;
  background-color: ${props => props.theme.success};
  border: none;
  margin: 0 auto;
  padding: 10px 20px;

  &:hover {
    background-color: ${props => props.theme.successLight};
  }
`;
