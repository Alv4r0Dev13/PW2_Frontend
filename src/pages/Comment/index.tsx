import React, { useEffect, useState } from 'react';
import {
  Container,
  Content,
  LMLink,
  LoginMessage,
  PostButton,
  Line,
  Title,
} from './styles';
import axios from '../../services/axios';
import { PostE } from '../../utils/entities';
import MiniProfile from '../../components/MiniProfile';
import PostContainer from '../../components/PostContainer';
import CommentSection from '../../components/CommentSection';
import { getStorage } from '../../services/storage';
import { useLocation, useParams } from 'react-router-dom';

const Comment: React.FC = () => {
  const [post, setPost] = useState<PostE>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      console.log(id);
      if (!id || id === '') return;
      const data = await axios.get(`/posts/${id}`).then(resp => resp.data);
      console.log(data);
      setPost(data);
    })();
  }, [id]);

  useEffect(() => {
    const currentUser = getStorage('user');
    setIsLoggedIn(!!currentUser);
  }, []);

  return (
    <Container>
      <Content>
        {post ? (
          <PostContainer key={post.id} data={post} />
        ) : (
          <p>Não foi possivel carregar este conteudo.</p>
        )}
        <Line />
        {isLoggedIn ? (
          <>
            <CommentSection />
            <Line />
          </>
        ) : (
          <LoginMessage>
            <LMLink to="/login" state={{ prev: location.pathname }}>
              Entre na sua conta
            </LMLink>{' '}
            para comentar!
          </LoginMessage>
        )}
        <Title>Comentários</Title>
      </Content>
      <MiniProfile />
    </Container>
  );
};

export default Comment;
