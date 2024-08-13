import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../services/axios';
import { setStorage } from '../../services/storage';
import {
  AccountMessage,
  InputContainer,
  Container,
  ErrorMessage,
  MessageLink,
  SendButton,
  Title,
  Content,
} from './styles';
import ToggleTheme from '../../components/ToggleTheme';
import ComponentInput from '../../components/ComponentInput';
import { APIResponseReject } from '../../utils/types';
import { ErrorType } from '../../utils/enum';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const [registerError, setRegisterError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassError, setConfirmPassError] = useState('');

  const { state } = useLocation();
  const navigate = useNavigate();

  function handleErrors() {
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPassError('');

    let isError = false;
    const emailTemplate = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    const fieldErr = 'Preencha este campo!';
    const passErr = 'As senhas não coincidem!';
    if (!username) {
      setUsernameError(fieldErr);
      isError = true;
    }
    if (!email) {
      setEmailError(fieldErr);
      isError = true;
    }
    if (email && !emailTemplate.test(email)) {
      setEmailError('Email inválido!');
      isError = true;
    }
    if (!password) {
      setPasswordError(fieldErr);
      isError = true;
    }
    if (!confirmPass) {
      setConfirmPassError(fieldErr);
      isError = true;
    }
    if (password !== confirmPass) {
      setPasswordError(passErr);
      setConfirmPassError(passErr);
      isError = true;
    }

    return isError;
  }

  async function handleRegister() {
    if (handleErrors()) return;
    await axios
      .post('/users/', { username, email, password })
      .then(
        // OK
        resp => {
          console.log(resp.data);
          setStorage('user', resp.data.payload);
          navigate(state.prev);
        },

        // NOT FOUND or SERVER ERROR
        (reason: APIResponseReject) => {
          const data = reason.response.data;
          console.log(data);
          for (const err of data.errors) {
            switch (err.type) {
              case ErrorType.USERNAME:
                setUsernameError(err.message);
                break;
              case ErrorType.EMAIL:
                setEmailError(err.message);
                break;
              case ErrorType.PASSWORD:
                setPasswordError(err.message);
                break;
              case ErrorType.SERVER:
                setRegisterError(err.message);
                break;
            }
          }
        },
      )
      .catch(err => {
        console.log(err);
        setRegisterError('Ocorreu um erro no servidor');
      });
  }

  return (
    <Container>
      <Content>
        <Title>TechTalks</Title>
        <ToggleTheme size={20} style={{ position: 'absolute', right: 20 }} />
        <Title>Criar conta</Title>
        <InputContainer>
          <ComponentInput
            label="Nome de usuário"
            type="text"
            name="username"
            id="username"
            placeholder="Seu nome"
            error={!!registerError || !!usernameError}
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoFocus
          />
          <ErrorMessage>{registerError || usernameError || ''}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <ComponentInput
            label="Email"
            type="text"
            name="email"
            id="email"
            placeholder="seu_email@email.com"
            error={!!registerError || !!emailError}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <ErrorMessage>{emailError || ''}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <ComponentInput
            label="Senha"
            type="password"
            name="password"
            id="password"
            placeholder="************"
            error={!!registerError || !!passwordError}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <ErrorMessage>{passwordError || ''}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <ComponentInput
            label="Repetir senha"
            type="password"
            name="confirm-pass"
            id="confirm-pass"
            placeholder="************"
            error={!!registerError || !!confirmPassError}
            value={confirmPass}
            onChange={e => setConfirmPass(e.target.value)}
          />
          <ErrorMessage>{confirmPassError || ''}</ErrorMessage>
        </InputContainer>
        <SendButton type="button" onClick={handleRegister}>
          Entrar
        </SendButton>
        <AccountMessage>
          Já tem uma conta? <MessageLink to="register">Clique aqui</MessageLink>{' '}
          para entrar!
        </AccountMessage>
      </Content>
    </Container>
  );
};

export default Register;
