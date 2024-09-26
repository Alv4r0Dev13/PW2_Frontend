import React from 'react';
import { LogoutModalI } from '../../utils/components';
import {
  Buttons,
  CancelButton,
  CloseButton,
  ConfirmButton,
  Container,
  ModalContainer,
  Text,
  ModalActions,
} from './styles';
import { CloseOutlined } from '@ant-design/icons';

const LogoutModal: React.FC<LogoutModalI> = ({ onClose, onConfirm }) => {
  return (
    <Container>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <CloseOutlined />
        </CloseButton>
        <Text>Sair da conta?</Text>
        <Buttons>
          <ConfirmButton onClick={onConfirm}>Sim, sair</ConfirmButton>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
        </Buttons>
      </ModalContainer>
    </Container>
  );
};

export default LogoutModal;
