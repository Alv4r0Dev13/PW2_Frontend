import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  max-width: 500px; /* Ajuste a largura conforme necessário */
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:30px

`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ProfilePictureContainer = styled.div`
  margin-bottom: 20px;
  img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    object-fit: cover;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: white;
  color: black;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 400px; /* Mantém os inputs alinhados e com largura adequada */
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%; /* Faz com que os inputs ocupem toda a largura do container */
`;

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    position: absolute;
    right: 10px;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
