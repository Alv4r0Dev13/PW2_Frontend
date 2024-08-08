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
  margin: auto;
`;

export const SearchOptionsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  padding: 0.5rem;
  margin: auto;
`;

export const LinkedText = styled.a`
  cursor: pointer;
  color: ${props => props.theme.textMain};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.success};
    text-decoration: underline;
  }
`

export const Line = styled.hr`
  width: 100%;
  color: ${props => props.theme.outline}
`
