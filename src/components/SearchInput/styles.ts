import styled from 'styled-components';
import colors from '../../styles/colors';

export const InputContainer = styled.label`
  cursor: text;
  display: flex;
  background-color: ${colors.dark.backgroundMain};
  border-radius: 50px;
  width: 50%;
  padding: 0.5% 1%;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: none;
  color: ${colors.dark.textMain};
  font-size: 16px;

  &::placeholder {
    color: ${colors.dark.textPlaceholder}
  }
`;

export const SearchButton = styled.button`
  border: none;
  background: none;
  color: ${colors.dark.textPlaceholder};
  font-size: 16px;
`;
