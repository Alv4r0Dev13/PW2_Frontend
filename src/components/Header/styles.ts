import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { getStorage } from '../../services/storage';

const theme = (getStorage('theme') || 'dark') as 'light' | 'dark';

export const Container = styled.div`
  background-color: ${props => props.theme.backgroundDarker};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2% 4%;
`;

export const TitleLink = styled(Link)`
  color: ${props => props.theme.textMain};
  text-decoration: none;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const HeaderLink = styled(Link)`
  color: ${props => props.theme.textMain};
  text-decoration: none;

  &:hover {
    text-decoration: underline
  }
`;

export const ContactLink = styled(Link)`
  color: ${props => props.theme.textMain};
  text-decoration: underline;
  cursor: pointer;
  padding: 8px 16px;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: rgba(224, 224, 224, 0.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-decoration: underline;
  }
`;
