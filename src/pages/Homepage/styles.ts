import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background-color: ${props => props.theme.backgroundMain};
  padding: 2% 4%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid ${props => props.theme.outline};
  border-radius: 15px;
  padding: 20px;
  width: calc(75% - 20px);
`;

export const LoginMessage = styled.p`
  color: ${props => props.theme.textLight};
`;

export const LMLink = styled(Link)`
  color: ${props => props.theme.success};
`;

export const PostButton = styled.button`
  color: white;
  background-color: ${props => props.theme.success};
  padding: 8px 16px;
  max-width: fit-content;

  &:hover {
    background-color: ${props => props.theme.successLight};
  }
`;
