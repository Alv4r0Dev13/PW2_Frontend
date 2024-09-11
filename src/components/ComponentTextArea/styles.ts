import styled from 'styled-components';

export const Container = styled.div``;

export const Text = styled.textarea`
  flex: 1;
  font-size: 15px;
  color: ${props => props.theme.textMain};
  background-color: ${props => props.theme.backgroundLighter};
  border: 2px solid ${props => props.theme.backgroundLighter};
  border-radius: 10px;
  padding: 5px 10px;
  resize: none;
  width: 100%;
  height: 105px;

  &::placeholder {
    color: ${props => props.theme.textPlaceholder};
  }

  &:focus-within {
    border-color: ${props => props.theme.success};
  }
`;

export const CharCount = styled.p`
  color: ${props => props.theme.textLight};
  text-align: right;
  font-size: 13px;
  padding: 0 10px;
`;
