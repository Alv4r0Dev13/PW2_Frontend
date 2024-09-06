import { PostComponentI } from '../../utils/components';
import {
  AuthorProfile,
  CommentsButton,
  Container,
  LikeButton,
  PostActions,
  PostAuthor,
  PostContent,
  PostDate,
  PostFoot,
  PostHead,
  PostScore,
  PostTitle,
  PostTitleContainer,
  TitleArrow,
} from './styles';
import {
  CommentOutlined,
  LikeOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { imgRoute } from '../../secret';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostContainer: React.FC<PostComponentI> = ({ data }) => {
  const [inputId, setInputId] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    if (data.id) {
      navigate(`/post/${data.id}`);
    }
  };
  return (
    <Container>
      <PostHead>
        <div>
          <PostTitleContainer>
            <TitleArrow>
              <RightOutlined />
            </TitleArrow>
            <PostTitle>{data.title}</PostTitle>
          </PostTitleContainer>
          <PostDate>31/02/2024 às 23:99</PostDate>
        </div>
        <PostAuthor>
          <h1>{data.user.name}</h1>
          <AuthorProfile src={`${imgRoute}${data.user.profileURL}`} />
        </PostAuthor>
      </PostHead>
      <PostContent>{data.content}</PostContent>
      <PostFoot>
        <PostActions>
          <LikeButton>
            <LikeOutlined />
            <span>{data.likes}</span>
          </LikeButton>
          <CommentsButton onClick={handleClick}>
            <CommentOutlined />
            <span>{data.comments}</span>
          </CommentsButton>
          <PostScore>{data.score} pontos</PostScore>
        </PostActions>
      </PostFoot>
    </Container>
  );
};

export default PostContainer;
