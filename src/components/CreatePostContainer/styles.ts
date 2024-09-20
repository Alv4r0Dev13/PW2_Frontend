import styled from 'styled-components';

export const Container = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const CancelButton = styled.button`
  background-color: ${props => props.theme.button};
  padding: 8px 16px;

  &:hover {
    background-color: ${props => props.theme.buttonLight};
  }
`;

export const SendButton = styled.button`
  color: white;
  background-color: ${props => props.theme.success};
  padding: 8px 16px;

  &:hover {
    background-color: ${props => props.theme.successLight};
  }
`;
