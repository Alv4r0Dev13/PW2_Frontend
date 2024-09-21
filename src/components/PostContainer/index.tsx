import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { getStorage, setStorage } from '../../services/storage';
import axios from '../../services/axios';
import { StoredUserE } from '../../utils/entities';

const PostContainer: React.FC<PostComponentI> = ({ data }) => {
  const [likes, setLikes] = useState(data.likes);
  const [score, setScore] = useState(data.score);
  const navigate = useNavigate();

  const handleClick = () => {
    if (data.id) {
      navigate(`/post/${data.id}`);
    }
  };

  function formatTime(timeStr: string) {
    const date = new Date(timeStr).toLocaleString();
    return date.substring(0, date.length - 3).replace(', ', ' às ');
  }

  async function handleLike() {
    const user = getStorage('user') as StoredUserE;
    const storedLikes = getStorage('liked') as string[] | null;
    if (!storedLikes || !storedLikes.includes(data.id)) {
      await axios
        .put(
          `/posts/like/${data.id}`,
          { add: true, userId: user.id },
          { headers: { Authorization: `Bearer ${user.token}` } },
        )
        .then(
          // OK
          () => {
            const storeContent = storedLikes
              ? [...storedLikes, data.id]
              : [data.id];
            setStorage('liked', storeContent);
            setLikes(likes + 1);
            setScore(score + 5);
          },

          // NOT FOUND or SERVER ERROR
          reason => {
            console.log(reason.response.data.message);
            alert('Algo deu errado :/');
          },
        )
        .catch(err => {
          console.log(err);
          alert('Algo deu errado :/');
        });
      return;
    }
    await axios
      .put(
        `/posts/like/${data.id}`,
        { add: false, userId: user.id },
        { headers: { Authorization: `Bearer ${user.token}` } },
      )
      .then(
        // OK
        () => {
          setStorage(
            'liked',
            storedLikes.filter(value => value !== data.id),
          );
          setLikes(likes ? likes - 1 : 0);
          setScore(score ? score - 5 : 0);
        },

        // NOT FOUND or SERVER ERROR
        reason => {
          console.log(reason.response.data.message);
          alert('Algo deu errado :/');
        },
      )
      .catch(err => {
        console.log(err);
        alert('Algo deu errado :/');
      });
  }

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
          <PostDate>{formatTime(data.date)}</PostDate>
        </div>
        <PostAuthor>
          <h1>{data.user.name}</h1>
          <AuthorProfile src={`${imgRoute}${data.user.profileURL}`} />
        </PostAuthor>
      </PostHead>
      <PostContent>{data.content}</PostContent>
      <PostFoot>
        <PostActions>
          <LikeButton onClick={handleLike}>
            <LikeOutlined />
            <span>{likes}</span>
          </LikeButton>
          <CommentsButton onClick={handleClick}>
            <CommentOutlined />
            <span>{data.comments}</span>
          </CommentsButton>
          <PostScore>{score} pontos</PostScore>
        </PostActions>
      </PostFoot>
    </Container>
  );
};

export default PostContainer;
