import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-left: 12px;
`;

export const InputContainer = styled.label`
  display: flex;
  background-color: ${props => props.theme.backgroundLighter};
  border: 2px solid ${props => props.theme.backgroundLighter};
  border-radius: 10px;
  padding: 5px 10px;

  &:focus-within {
    border-color: ${props => props.theme.success};
  }
`;

export const Input = styled.input`
  flex: 1;
  color: ${props => props.theme.textMain};
  background: none;
  border: none;
  font-size: 15px;

  &::placeholder {
    color: ${props => props.theme.textPlaceholder};
  }
`;

export const ShowPasswordButton = styled.button`
  display: flex;
  color: ${props => props.theme.textMain};
  font-size: 18px;
  align-items: center;
  background: none;
  border: none;
`;

export const CharCount = styled.p`
  color: ${props => props.theme.textLight};
  text-align: right;
  font-size: 13px;
  padding: 0 10px;
`;
