import React from 'react';
import { GeneralModalI } from '../../utils/components';
import {
  Buttons,
  CancelButton,
  CloseButton,
  ConfirmButton,
  Container,
  ModalContainer,
  Text,
} from './styles';
import { CloseOutlined } from '@ant-design/icons';

const GeneralModal: React.FC<GeneralModalI> = ({
  onClose,
  onConfirm,
  text,
  confirmText,
  cancelText,
}) => {
  return (
    <Container>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <CloseOutlined />
        </CloseButton>
        <Text>{text}</Text>
        <Buttons>
          <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
          <CancelButton onClick={onClose}>{cancelText}</CancelButton>
        </Buttons>
      </ModalContainer>
    </Container>
  );
};

export default GeneralModal;
