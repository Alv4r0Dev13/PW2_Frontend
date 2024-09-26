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
import { PostE, CommentE } from '../../utils/entities';
import MiniProfile from '../../components/MiniProfile';
import PostContainer from '../../components/PostContainer';
import CommentContainer from '../../components/CommentContainer';
import CommentSection from '../../components/CommentSection';
import { getStorage } from '../../services/storage';
import { useLocation, useParams } from 'react-router-dom';
import CreatePostContainer from '../../components/CreatePostContainer';

const Comment: React.FC = () => {
  const [post, setPost] = useState<PostE>();
  const [comments, setComments] = useState<CommentE[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [userId, setUserId] = useState('');
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (!id || id === '') return;
      const data = await axios.get(`/posts/${id}`).then(resp => resp.data);
      setPost(data);
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      const data = await axios
        .get(`/comments/post/${id}`)
        .then(resp => resp.data);
      setComments(data);
    })();
  }, [id]);

  async function createPost() {
    if (postContent && post) {
      const user = getStorage('user');
      await axios
        .post(
          '/comments/',
          {
            authorId: user.id,
            postId: id,
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
    const currentUser = getStorage('user');
    setIsLoggedIn(!!currentUser);
    if (currentUser) setUserId(currentUser.id);
  }, []);

  return (
    <Container>
      <Content>
        {post ? (
          <PostContainer key={post.id} data={post} isButtonEnabled={false} />
        ) : (
          <p>Não foi possivel carregar este conteudo.</p>
        )}
        <Line />
        {isLoggedIn ? (
          <>
            <CreatePostContainer
              type="comment"
              contentPlaceholder="Escreva um comentário..."
              content={postContent}
              onChangeContent={e => setPostContent(e.target.value)}
              onClickCancel={() => setIsCreatePost(false)}
              onClickPost={createPost}
              allowCancel
            />
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
        {comments.length > 0
          ? comments.map(coment => (
              <CommentContainer
                key={coment.id}
                data={coment}
                haveOptions={userId === coment.authorId}
              />
            ))
          : null}
      </Content>
      <MiniProfile />
    </Container>
  );
};

export default Comment;
