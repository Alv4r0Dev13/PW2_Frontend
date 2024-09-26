import React, { useEffect, useState } from 'react';
import { CommentComponentI } from '../../utils/components';
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
import PostConfig from '../PostConfig';
import GeneralModal from '../GeneralModal';
import CreatePostContainer from '../CreatePostContainer';

const CommentContainer: React.FC<CommentComponentI> = ({
  data,
  haveOptions,
}) => {
  const [likes, setLikes] = useState(data.likes);
  const [score, setScore] = useState(data.score);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editContent, setEditContent] = useState(data.content);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<StoredUserE | null>(null);
  const navigate = useNavigate();

  async function handleLike() {
    const storedLikes = getStorage('liked') as string[] | null;
    if (!storedLikes || !storedLikes.includes(data.id)) {
      await axios
        .put(
          `/comments/like/${data.id}`,
          { add: true, userId: currentUser?.id },
          { headers: { Authorization: `Bearer ${currentUser?.token}` } },
        )
        .then(
          // OK
          () => {
            const storeContent = storedLikes
              ? [...storedLikes, data.id]
              : [data.id];
            setStorage('liked', storeContent);
            setLikes(likes + 1);
            if (data.user.name !== currentUser?.username) setScore(score + 5);
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
        `/comments/like/${data.id}`,
        { add: false, userId: currentUser?.id },
        { headers: { Authorization: `Bearer ${currentUser?.token}` } },
      )
      .then(
        // OK
        () => {
          setStorage(
            'liked',
            storedLikes.filter(value => value !== data.id),
          );
          setLikes(likes ? likes - 1 : 0);
          if (data.user.name !== currentUser?.username)
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

  async function handleEdit() {
    await axios
      .put(
        `/comments/${data.id}`,
        { content: editContent },
        { headers: { Authorization: `Bearer ${currentUser?.token}` } },
      )
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

  async function handleDelete() {
    await axios
      .delete(`/comments/${data.id}`, {
        headers: { Authorization: `Bearer ${currentUser?.token}` },
      })
      .then(
        // fulfilled
        () => {
          setIsDeleteModalOpen(false);
          window.location.reload();
        },

        // rejected
        reason => console.log(reason.response.data.errors),
      )
      .catch(err => console.log(err));
  }

  useEffect(() => {
    const user = getStorage('user');
    setCurrentUser(user);
  }, []);

  return !isEditMode ? (
    <Container>
      {isDeleteModalOpen && (
        <GeneralModal
          text="Tem certeza que deseja deletar o comentário?"
          confirmText="Sim, tenho certeza!"
          cancelText="Cancelar"
          onConfirm={handleDelete}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
      <PostHead>
        <PostAuthor>
          <AuthorProfile src={`${imgRoute}${data.user.profileURL}`} />
          <h1>{data.user.name}</h1>
        </PostAuthor>
      </PostHead>
      <PostContent>{data.content}</PostContent>
      <PostFoot>
        <PostActions>
          <LikeButton onClick={handleLike}>
            <LikeOutlined />
            <span>{likes}</span>
          </LikeButton>
          <PostScore>{score} pontos</PostScore>
        </PostActions>
        {haveOptions && (
          <PostConfig
            author={data.user.name}
            onClickEdit={() => setIsEditMode(true)}
            onClickDelete={() => setIsDeleteModalOpen(true)}
          />
        )}
      </PostFoot>
    </Container>
  ) : (
    <CreatePostContainer
      type="comment"
      content={editContent}
      onChangeContent={e => setEditContent(e.target.value)}
      onClickPost={handleEdit}
      allowCancel
      onClickCancel={() => {
        setIsEditMode(false);
        setEditContent(data.content);
      }}
    />
  );
};

export default CommentContainer;
