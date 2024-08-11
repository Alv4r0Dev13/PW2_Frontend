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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  async function handleLogin() {
    await axios
      .post('/users/login', { email, password })
      .then(
        // OK
        async resp => {
          setStorage('user', resp.data.payload);
          navigate(location.state);
        },

        // NOT FOUND or SERVER ERROR
        reason => {
          const data = reason.response.data;
          console.log(data);
          setLoginError(data.message);
        },
      )
      .catch(err => {
        console.log(err);
        setLoginError('Ocorreu um erro no servidor');
      });
    // const error = await userLogin({email, password});
    // if (!error)
    // else setLoginError(error);
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
            error={!!loginError}
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
          />
          <ErrorMessage>{loginError || ''}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <ComponentInput
            label="Senha"
            type="password"
            name="password"
            id="password"
            placeholder="************"
            error={!!loginError}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </InputContainer>
        <SendButton type="button" onClick={handleLogin}>
          Entrar
        </SendButton>
        <AccountMessage>
          Ainda não tem uma conta?{' '}
          <MessageLink to="register">Clique aqui</MessageLink> para criar!
        </AccountMessage>
      </Content>
    </Container>
  );
};

export default Login;
