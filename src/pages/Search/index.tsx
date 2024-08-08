import React, { useEffect, useState } from 'react';
import colors from '../../styles/colors';
import {
  Container,
  Content,
  SearchOptionsDiv,
  LinkedText,
  Line
} from './styles';
import axios from '../../services/axios';
import { PostE } from '../../utils/entities';
import MiniProfile from '../../components/MiniProfile';
import PostContainer from '../../components/PostContainer';
import { getStorage } from '../../services/storage';
import { AppTheme } from '../../utils/types';

const theme = (getStorage('theme') as AppTheme | null) || 'dark';

const Homepage: React.FC = () => {
  const [posts, setPosts] = useState<PostE[]>([]);
  const [option, setOption] = useState(0);

  function setOptionToPosts() { setOption(0); }
  function setOptionToMyPosts() { setOption(1); }
  function setOptionToPeople() { setOption(2); }

  useEffect(() => {
    (async () => {
      const data = await axios.get('/posts').then(resp => resp.data);
      setPosts(data);
    })();
  }, []);

  return (
    <Container>
      <Content>
        <SearchOptionsDiv>
          <LinkedText
            style={{
              color: option === 0 ? colors[theme].success : colors[theme].textMain,
              ...(option === 0 ? {
                textDecoration: 'underline'
              }: null)
            }}
            onClick={setOptionToPosts}
          ><h1>Postagens</h1></LinkedText>
          <LinkedText
            style={{
              color: option === 1 ? colors[theme].success : colors[theme].textMain,
              ...(option === 1 ? {
                textDecoration: 'underline'
              }: null)
            }}
            onClick={setOptionToMyPosts}
          ><h1>Minhas Postagens</h1></LinkedText>
          <LinkedText
            style={{
              color: option === 2 ? colors[theme].success : colors[theme].textMain,
              ...(option === 2 ? {
                textDecoration: 'underline'
              }: null)
            }}
            onClick={setOptionToPeople}
          ><h1>Pessoas</h1></LinkedText>
        </SearchOptionsDiv>
        <Line/>
        {posts.map(post => (
          <PostContainer key={post.id} data={post} />
        ))}
      </Content>
      <MiniProfile />
    </Container>
  );
};

export default Homepage;
