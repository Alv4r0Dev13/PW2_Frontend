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

export const CreatePostContainer = styled.div`
  position: absolute;
  background-color: ${props => `${props.theme.backgroundMain}aa`};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const CPBackground = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 0;
`;

export const CreatePostModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${props => props.theme.backgroundMain};
  width: 30%;
  border-radius: 10px;
  padding: 20px;
  top: 40%;
  left: 35%;
  /* margin: 20% auto 0; */
  z-index: 100;
`;

export const CPTitle = styled.h1`
  text-align: center;
`;

export const CPSubmit = styled.button`
  font-size: 15px;
  color: white;
  background-color: ${props => props.theme.success};
  margin: auto;
  padding: 8px 16px;

  &:hover {
    background-color: ${props => props.theme.successLight};
  }
`;
