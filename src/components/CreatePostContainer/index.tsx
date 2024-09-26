import React from 'react';

import {
  ButtonContainer,
  CancelButton,
  Container,
  InputContainer,
  SendButton,
} from './styles';
import { CreatePostContainerI } from '../../utils/components';
import ComponentInput from '../ComponentInput';
import ComponentTextArea from '../ComponentTextArea';

const CreatePostContainer: React.FC<CreatePostContainerI> = ({
  type,
  title,
  content,
  titlePlaceholder,
  contentPlaceholder,
  onChangeTitle,
  onChangeContent,
  onClickPost,
  onClickCancel,
  allowCancel = false,
}) => {
  return (
    <Container>
      <InputContainer>
        {type === 'post' && (
          <ComponentInput
            value={title}
            placeholder={titlePlaceholder || 'Título da postagem'}
            maxLength={100}
            onChange={onChangeTitle}
          />
        )}
        <ComponentTextArea
          placeholder={contentPlaceholder || 'Escreva sua postagem aqui'}
          value={content}
          maxLength={2000}
          onChange={onChangeContent}
        />
      </InputContainer>
      <ButtonContainer>
        <SendButton onClick={onClickPost}>Postar</SendButton>
        {allowCancel && (
          <CancelButton onClick={onClickCancel}>Cancelar</CancelButton>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default CreatePostContainer;
