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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const { state } = useLocation();
  const navigate = useNavigate();

  function handleErrors() {
    setEmailError('');
    setPasswordError('');
    setLoginError('');

    let isError = false;
    const emailTemplate = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    if (!email) {
      setEmailError('Preencha este campo!');
      isError = true;
    }
    if (email && !emailTemplate.test(email)) {
      setEmailError('Email inválido!');
      isError = true;
    }
    if (!password) {
      setPasswordError('Preencha este campo!');
      isError = true;
    }

    return isError;
  }

  async function handleLogin() {
    if (handleErrors()) return;
    await axios
      .post('/users/login', { email, password })
      .then(
        // OK
        resp => {
          setStorage('user', resp.data.payload);
          navigate(state.prev, { state });
        },

        // NOT FOUND or SERVER ERROR
        (reason: APIResponseReject) => {
          const data = reason.response.data;
          console.log(data);
          for (const err of data.errors) {
            switch (err.type) {
              case ErrorType.EMAIL:
                setEmailError(err.message);
                break;
              case ErrorType.PASSWORD:
                setPasswordError(err.message);
                break;
              case ErrorType.SERVER:
                setLoginError(err.message);
                break;
            }
          }
        },
      )
      .catch(err => {
        console.log(err);
        setEmailError('Ocorreu um erro no servidor');
      });
  }

  return (
    <Container>
      <Content>
        <Title>TechTalks</Title>
        <ToggleTheme size={20} style={{ position: 'absolute', right: 20 }} />
        <Title>Fazer login</Title>
        <InputContainer>
          <ComponentInput
            label="Email"
            type="text"
            name="email"
            id="email"
            placeholder="seu_email@email.com"
            error={!!loginError || !!emailError}
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
          />
          <ErrorMessage>{loginError || emailError || ''}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <ComponentInput
            label="Senha"
            type="password"
            name="password"
            id="password"
            placeholder="************"
            error={!!loginError || !!passwordError}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <ErrorMessage>{passwordError || ''}</ErrorMessage>
        </InputContainer>
        <SendButton type="button" onClick={handleLogin}>
          Entrar
        </SendButton>
        <AccountMessage>
          Ainda não tem uma conta?{' '}
          <MessageLink to="/register" state={state}>
            Clique aqui
          </MessageLink>{' '}
          para criar!
        </AccountMessage>
      </Content>
    </Container>
  );
};

export default Login;
