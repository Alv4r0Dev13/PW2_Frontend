import styled from 'styled-components';

export const ProfileContainer = styled.div`
display: flex;
gap: 20px;
align-items: flex-start;
background-color: ${props => props.theme.backgroundMain};
justify-content: center;
`;

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

export const ProfileContent = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
border: 2px solid ${props => props.theme.outline};
border-radius: 15px;
padding: 20px;
width: calc(75% - 20px);
margin: 2rem;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

export const ProfileInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    margin: 0;
    font-size: 24px;
  }
  p {
    margin: 5px 0;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 20px;
  height: 100%;
`;

export const IconButton = styled.button<{ red?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  border: ${props => (props.red ? 'none' : '1px solid black')};
  background-color: ${props => (props.red ? 'red' : 'white')};
  color: ${props => (props.red ? 'white' : 'black')};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const PostsSection = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AllUserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`;

export const Line = styled.hr`
  width: 100%;
  color: ${props => props.theme.outline}
`;
