import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  background-color: ${props => props.theme.backgroundMain}AA;
  width: 100vw;
  height: 100vh;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.backgroundLighter};
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 7rem;
`;

export const Text = styled.p`
  color: ${props => props.theme.textMain};
  text-align: center;
  margin-bottom: 5%;
`;

export const Buttons = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-around;
  gap: 1rem;
`;

export const ConfirmButton = styled.button`
  width: 7rem;
  height: 2rem;
  color: white;
  background-color: ${props => props.theme.danger};

  &:hover {
    background-color: ${props => props.theme.dangerLight};
  }
`;

export const CancelButton = styled.button`
  width: 7rem;
  height: 2rem;
  background-color: ${props => props.theme.button};
  color: ${props => props.theme.textButton};

  &:hover {
    background-color: ${props => props.theme.buttonLight};
  }
`;

export const CloseButton = styled.button`
  display: flex;
  color: ${props => props.theme.textMain};
  background: none;
  padding: 2px;
  top: 20px;
  right: 20px;
  margin-left: 90%;
`;
