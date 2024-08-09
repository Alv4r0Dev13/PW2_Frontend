import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  margin: auto;
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

export const ProfileInfo = styled.div`
  flex-grow: 1;
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
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-top: 20px;
  text-align: center;

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
