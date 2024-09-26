import React, { useEffect, useState } from 'react';
import { PostComponentI } from '../../utils/components';
import {
  AuthorProfile,
  CommentsButton,
  Container,
  DisabledCommentsButton,
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
import PostConfig from '../PostConfig';
import CreatePostContainer from '../CreatePostContainer';
import GeneralModal from '../GeneralModal';

const PostContainer: React.FC<PostComponentI> = ({ data, isButtonEnabled }) => {
  const [likes, setLikes] = useState(data.likes);
  const [score, setScore] = useState(data.score);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(data.title);
  const [editContent, setEditContent] = useState(data.content);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [user, setUser] = useState<StoredUserE | null>(null);
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
    const storedLikes = getStorage('liked') as string[] | null;
    if (!storedLikes || !storedLikes.includes(data.id)) {
      await axios
        .put(
          `/posts/like/${data.id}`,
          { add: true, userId: user?.id },
          { headers: { Authorization: `Bearer ${user?.token}` } },
        )
        .then(
          // fulfilled
          () => {
            const storeContent = storedLikes
              ? [...storedLikes, data.id]
              : [data.id];
            setStorage('liked', storeContent);
            setLikes(likes + 1);
            if (data.user.name !== user?.username) setScore(score + 5);
          },

          // rejected
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
        { add: false, userId: user?.id },
        { headers: { Authorization: `Bearer ${user?.token}` } },
      )
      .then(
        // fulfilled
        () => {
          setStorage(
            'liked',
            storedLikes.filter(value => value !== data.id),
          );
          setLikes(likes ? likes - 1 : 0);
          if (data.user.name !== user?.username)
            setScore(score ? score - 5 : 0);
        },

        // rejected
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

  useEffect(() => {
    const user = getStorage('user') as StoredUserE;
    setUser(user);
  }, []);

  async function handleEditPost() {
    const editData: { [key: string]: any } = {};
    if (editTitle !== data.title) editData.title = editTitle;
    if (editContent !== data.content) editData.content = editContent;
    await axios
      .put(`/posts/${data.id}`, editData, {
        headers: { Authorization: `Bearer ${user?.token}` },
      })
      .then(
        // fulfilled
        () => {
          setIsEditMode(false);
          window.location.reload();
        },

        // rejected
        reason => console.log(reason.response.data.errors),
      )
      .catch(err => console.log(err));
  }

  async function handleDeletePost() {
    await axios
      .delete(`/posts/${data.id}`, {
        headers: { Authorization: `Bearer ${user?.token}` },
      })
      .then(
        // fullfilled
        () => {
          setIsDeleteModalOpen(false);
          window.location.reload();
        },

        // rejected
        reason => console.log(reason.response.data.errors),
      )
      .catch(err => console.log(err));
  }

  return !isEditMode ? (
    <Container>
      {isDeleteModalOpen && (
        <GeneralModal
          text={'Você tem certeza que deseja deletar essa postagem?'}
          confirmText={'Sim, tenho certeza!'}
          cancelText={'Cancelar'}
          onConfirm={handleDeletePost}
          onClose={() => {
            setIsDeleteModalOpen(false);
          }}
        />
      )}
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
          {isButtonEnabled ? (
            <CommentsButton onClick={handleClick}>
              <CommentOutlined />
              <span>{data.comments}</span>
            </CommentsButton>
          ) : (
            <DisabledCommentsButton>
              <CommentOutlined />
              <span>{data.comments}</span>
            </DisabledCommentsButton>
          )}
          <PostScore>{score} pontos</PostScore>
        </PostActions>
        <PostConfig
          author={data.user.name}
          onClickEdit={() => setIsEditMode(true)}
          onClickDelete={() => {
            setIsDeleteModalOpen(true);
          }}
        />
      </PostFoot>
    </Container>
  ) : (
    <CreatePostContainer
      type="post"
      title={editTitle}
      content={editContent}
      onChangeTitle={e => setEditTitle(e.target.value)}
      onChangeContent={e => setEditContent(e.target.value)}
      onClickPost={handleEditPost}
      allowCancel
      onClickCancel={() => {
        setIsEditMode(false);
        setEditTitle(data.title);
        setEditContent(data.content);
      }}
    />
  );
};

export default PostContainer;
