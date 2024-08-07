import styled from 'styled-components';
import colors from '../../styles/colors';

export const InputContainer = styled.label`
  cursor: text;
  display: flex;
  position: absolute;
  background-color: ${props => props.theme.backgroundMain};
  border-radius: 50px;
  width: 50%;
  padding: 0.5% 1%;
  left: 25%;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: none;
  color: ${props => props.theme.textMain};
  font-size: 16px;

  &::placeholder {
    color: ${props => props.theme.textPlaceholder}
  }
`;

export const SearchButton = styled.button`
  border: none;
  background: none;
  color: ${props => props.theme.textPlaceholder};
  font-size: 16px;
`;
