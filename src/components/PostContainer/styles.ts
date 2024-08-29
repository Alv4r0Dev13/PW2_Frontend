import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.backgroundLighter};
  border-radius: 15px;
  padding: 20px;
`;

export const PostHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostTitleContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TitleArrow = styled.div``;

export const PostTitle = styled.h1``;

export const PostDate = styled.p`
  color: ${props => props.theme.textLight};
  font-size: 13px;
`;

export const PostAuthor = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const AuthorProfile = styled.img`
  border-radius: 20px;
  width: 50px;
  height: 50px;
`;

export const PostContent = styled.div`
  margin: 10px 0 15px;
`;

export const PostFoot = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const LikeButton = styled.button`
  cursor: pointer;
  display: flex;
  color: #FFFFFF;
  background-color: ${props => props.theme.success};
  border: none;
  border-radius: 5px;
  align-items: center;
  gap: 2px;
  padding: 2px 5px;

  &:hover{
    background-color: ${props => props.theme.successLight};
  }
`;

export const CommentsButton = styled.button`
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

export const PostScore = styled.p``;
