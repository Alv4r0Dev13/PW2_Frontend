import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  background-color: ${props => props.theme.backgroundLighter};
  border-radius: 15px;
  padding: 20px;
`;

export const ProfilePic = styled.div`
  background-color: #c6c6c6;
  border-radius: 20px;
  width: 50px;
  height: 50px;
`;
