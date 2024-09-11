import React, { useEffect, useState } from 'react';
import {
  Container,
  Content,
  CPBackground,
  CPSubmit,
  CPTitle,
  CreatePostContainer,
  CreatePostModal,
  LMLink,
  LoginMessage,
  PostButton,
} from './styles';
import axios from '../../services/axios';
import { PostE } from '../../utils/entities';
import Header from '../../components/Header';
import MiniProfile from '../../components/MiniProfile';
import PostContainer from '../../components/PostContainer';
import { getStorage } from '../../services/storage';
import { useLocation } from 'react-router-dom';
import ComponentInput from '../../components/ComponentInput';
import ComponentTextArea from '../../components/ComponentTextArea';

const Homepage: React.FC = () => {
  const [posts, setPosts] = useState<PostE[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [postTitle, setPostTile] = useState('');
  const [postContent, setPostContent] = useState('');
  const location = useLocation();

  async function createPost() {
    if (postTitle && postContent) {
      const user = getStorage('user');
      await axios
        .post(
          '/posts',
          {
            authorId: user.id,
            title: postTitle,
            content: postContent,
          },
          { headers: { Authorization: `Bearer ${user.token}` } },
        )
        .then(
          // fulfilled
          () => {
            setIsCreatePost(false);
            window.location.reload();
          },
          // rejected
          reason => {
            console.log(reason.response.data.errors);
          },
        )
        .catch(err => {
          console.log(err);
        });
    }
  }

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
          <PostButton onClick={() => setIsCreatePost(true)}>
            Criar postagem
          </PostButton>
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

      {/* Create Post Modal */}
      {isCreatePost && (
        <CreatePostContainer>
          <CPBackground onClick={() => setIsCreatePost(false)} />
          <CreatePostModal id="cp-modal">
            <CPTitle>Criar Postagem</CPTitle>
            <ComponentInput
              // label="Título"
              type="text"
              name="title"
              id="title"
              placeholder="Título da postagem"
              value={postTitle}
              maxLength={100}
              onChange={e => setPostTile(e.target.value)}
              autoFocus
            />
            <ComponentTextArea
              maxLength={500}
              placeholder="Escreva sua postagem aqui..."
              value={postContent}
              onChange={e => setPostContent(e.target.value)}
            />
            <CPSubmit onClick={createPost}>Postar</CPSubmit>
          </CreatePostModal>
        </CreatePostContainer>
      )}
    </Container>
  );
};

export default Homepage;
