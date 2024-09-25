import React, { useEffect, useState } from 'react';
import {
  DeleteOutlined,
  EditOutlined,
  LeftOutlined,
  SettingFilled,
} from '@ant-design/icons';

import {
  ActionsContainer,
  Arrow,
  Container,
  DeletePostButton,
  EditPostButton,
  OpenMenuButton,
} from './styles';
import { PostConfigI } from '../../utils/components';
import { getStorage } from '../../services/storage';
import { StoredUserE } from '../../utils/entities';

const PostConfig: React.FC<PostConfigI> = ({
  author,
  onClickEdit,
  onClickDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthor, setIsAuthor] = useState(false);

  useEffect(() => {
    const currentUser = getStorage('user') as StoredUserE;
    if (!currentUser) return;
    if (currentUser.username === author) setIsAuthor(true);
  }, [author]);

  return isAuthor ? (
    <Container>
      <OpenMenuButton onClick={() => setIsOpen(!isOpen)}>
        <SettingFilled />
      </OpenMenuButton>
      {isOpen && (
        <ActionsContainer>
          <LeftOutlined />
          <EditPostButton onClick={onClickEdit}>
            <EditOutlined />
          </EditPostButton>
          <DeletePostButton onClick={onClickDelete}>
            <DeleteOutlined />
          </DeletePostButton>
        </ActionsContainer>
      )}
    </Container>
  ) : null;
};

export default PostConfig;
