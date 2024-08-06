import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../services/axios';
import { setStorage } from '../../services/storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  async function handleLogin() {
    await axios
    .post('/users/login', {email, password})
    .then(
      // OK
      async resp => {
        await setStorage('user', resp.data.payload);
        navigate(location.state);
      },

      // NOT FOUND or SERVER ERROR
      reason => {
        const data = reason.response.data;
        console.log(data);
        setLoginError(data.message)
      },
    )
    .catch(err => {
      console.log(err);
      setLoginError('Ocorreu um erro no servidor')
    });
    // const error = await userLogin({email, password});
    // if (!error)
    // else setLoginError(error);
  }

  return (
    <div style={{color: '#ffffff'}}>
      <h1>Login</h1>
      {loginError && <p>{loginError}</p>}
      <input
        type="text"
        name="email"
        id="email"
        placeholder="example@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="********"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleLogin}>Enviar</button>
    </div>
  );
}

export default Login;
