import React, { useEffect, useState } from 'react';
import { Container, Content, LMLink, LoginMessage, PostButton } from './styles';
import axios from '../../services/axios';
import { PostE } from '../../utils/entities';
import Header from '../../components/Header';
import MiniProfile from '../../components/MiniProfile';
import PostContainer from '../../components/PostContainer';
import { getStorage } from '../../services/storage';
import { useLocation } from 'react-router-dom';

const Homepage: React.FC = () => {
  const [posts, setPosts] = useState<PostE[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const data = await axios.get('/posts').then(resp => resp.data);
      console.log(data);
      setPosts(data);
    })();
  }, []);

  useEffect(() => {
    const currentUser = getStorage('user');
    setIsLoggedIn(!!currentUser);
  }, []);

  return (
    <Container>
      <Content>
        {isLoggedIn ? (
          <PostButton>Criar postagem</PostButton>
        ) : (
          <LoginMessage>
            <LMLink to="/login" state={{ prev: location.pathname }}>
              Entre na sua conta
            </LMLink>{' '}
            para enviar postagens!
          </LoginMessage>
        )}
        {posts.map(post => (
          <PostContainer key={post.id} data={post} />
        ))}
      </Content>
      <MiniProfile />
    </Container>
  );
};

export default Homepage;
