import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  background-color: ${props => props.theme.backgroundMain}AA;
  width: 100vw;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.backgroundLighter};
  border-radius: 10px;
  padding: 2%;
  width: 12%;
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
`;

export const ConfirmButton = styled.button`
  padding: 2% 4%;
  color: white;
  background-color: ${props => props.theme.danger};

  &:hover {
    background-color: ${props => props.theme.dangerLight};
  }
`;

export const CancelButton = styled.button`
  background-color: ${props => props.theme.button};
  color: ${props => props.theme.textButton};

  &:hover {
    background-color: ${props => props.theme.buttonLight};
  }
`;

export const CloseButton = styled.button`
  display: flex;
  position: absolute;
  color: ${props => props.theme.textMain};
  background: none;
  padding: 2px;
  top: 20px;
  right: 20px;
`;
