import React, { useEffect, useState } from 'react';
import colors from '../../styles/colors';
import {
  Container,
  Content,
  SearchOptionsDiv,
  LinkedText,
  Line,
} from './styles';
import axios from '../../services/axios';
import { PostE, StoredUserE, UserE } from '../../utils/entities';
import MiniProfile from '../../components/MiniProfile';
import PostContainer from '../../components/PostContainer';
import UserContainer from '../../components/UserContainer';
import { getStorage } from '../../services/storage';
import { AppTheme } from '../../utils/types';
import { SearchProps } from '../../utils/components';
import { useLocation } from 'react-router-dom';

const theme = (getStorage('theme') as AppTheme | null) || 'dark';

const Search: React.FC<SearchProps> = ({ searchText }) => {
  const [user, setUser] = useState<StoredUserE | null>(null);
  const [requestUrl, setRequestUrl] = useState('/filterPosts');
  const [posts, setPosts] = useState<PostE[]>([]);
  const [users, setUsers] = useState<UserE[]>([]);
  const [option, setOption] = useState(0);
  const [search, setSearch] = useState(searchText);
  const { state } = useLocation();

  useEffect(() => {
    const storedUser = getStorage('user');
    setUser(storedUser);

    if (!search) {
      setSearch(state.search);
      state.search = '';
    }
  }, [search, state]);

  useEffect(() => {
    setSearch(searchText);
  }, [searchText]);

  function setOptionToPosts() {
    setOption(0);
    setRequestUrl('/filterPosts');
  }
  function setOptionToMyPosts() {
    setOption(1);
    setRequestUrl(`/filterPosts/user/${user?.id}`);
  }
  function setOptionToPeople() {
    setOption(2);
    setRequestUrl('/filterUsers');
  }

  useEffect(() => {
    (async () => {
      const params = `/${search}`;
      const newResquestUrl = search ? requestUrl + params : requestUrl;
      if (user == null) return;
      const data = await axios
        .get(encodeURI(newResquestUrl), {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then(resp => resp.data);
      if (option !== 2) {
        setPosts(data);
      } else {
        setUsers(data);
      }
    })();
  }, [user, requestUrl, option, search]);

  return (
    <Container>
      <Content>
        <SearchOptionsDiv>
          <LinkedText
            style={{
              color:
                option === 0 ? colors[theme].success : colors[theme].textMain,
              ...(option === 0
                ? {
                    textDecoration: 'underline',
                  }
                : null),
            }}
            onClick={setOptionToPosts}
          >
            <h1>Postagens</h1>
          </LinkedText>
          <LinkedText
            style={{
              color:
                option === 1 ? colors[theme].success : colors[theme].textMain,
              ...(option === 1
                ? {
                    textDecoration: 'underline',
                  }
                : null),
            }}
            onClick={setOptionToMyPosts}
          >
            <h1>Minhas Postagens</h1>
          </LinkedText>
          <LinkedText
            style={{
              color:
                option === 2 ? colors[theme].success : colors[theme].textMain,
              ...(option === 2
                ? {
                    textDecoration: 'underline',
                  }
                : null),
            }}
            onClick={setOptionToPeople}
          >
            <h1>Pessoas</h1>
          </LinkedText>
        </SearchOptionsDiv>
        <Line />
        {option !== 2
          ? posts.map(post => (
              <PostContainer key={post.id} data={post} isButtonEnabled={true} />
            ))
          : users.map(user => <UserContainer key={user.id} data={user} />)}
      </Content>
      <MiniProfile />
    </Container>
  );
};

export default Search;
