import React, { useEffect, useState } from 'react';
import { Container, Content} from './styles';
import axios from '../../services/axios';
import { PostE } from '../../utils/entities';
import Header from '../../components/Header';
import MiniProfile from '../../components/MiniProfile';
import PostContainer from '../../components/PostContainer';

const Homepage: React.FC = () => {
  const [posts, setPosts] = useState<PostE[]>([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get('/posts').then(resp => resp.data);
      setPosts(data);
    })();
  }, []);

  return (
    <Container>
      <Content>
        {posts.map(post => (
          <PostContainer key={post.id} data={post} />
        ))}
      </Content>
      <MiniProfile />
    </Container>
  );
};

export default Homepage;
