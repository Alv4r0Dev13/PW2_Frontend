import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 5px;
`;

export const OpenMenuButton = styled.button`
  cursor: pointer;
  display: flex;
  color: #000000;
  background-color: ${props => props.theme.button};
  border: none;
  border-radius: 5px;
  align-items: center;
  gap: 2px;
  padding: 2px 4px;

  &:hover{
    background-color: ${props => props.theme.buttonLight};
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 5px;
`;

export const Arrow = styled.p`
  color: ${props => props.theme.textMain};
`;

export const EditPostButton = styled.button`
  cursor: pointer;
  display: flex;
  color: #000000;
  background-color: ${props => props.theme.button};
  border: none;
  border-radius: 5px;
  align-items: center;
  gap: 2px;
  padding: 2px 4px;

  &:hover{
    background-color: ${props => props.theme.buttonLight};
  }
  `;

export const DeletePostButton = styled.button`
  cursor: pointer;
  display: flex;
  color: #FFFFFF;
  background-color: ${props => props.theme.danger};
  border: none;
  border-radius: 5px;
  align-items: center;
  gap: 2px;
  padding: 2px 4px;

  &:hover{
    background-color: ${props => props.theme.dangerLight};
  }
`;
