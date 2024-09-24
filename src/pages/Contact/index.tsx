import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/axios';
import {
  Container,
  Content,
  Title,
  InputContainer,
  SendButton,
  ErrorMessage,
} from './styles';
import ComponentInput from '../../components/ComponentInput';
import { APIResponseReject } from '../../utils/types';
import ToggleTheme from '../../components/ToggleTheme';
import ComponentTextArea from '../../components/ComponentTextArea';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submissionError, setSubmissionError] = useState('');

  const navigate = useNavigate();

  function handleErrors() {
    setNameError('');
    setEmailError('');
    setMessageError('');
    setSubmissionError('');

    let isError = false;
    const emailTemplate = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    if (!name) {
      setNameError('Preencha este campo!');
      isError = true;
    }
    if (!email) {
      setEmailError('Preencha este campo!');
      isError = true;
    }
    if (email && !emailTemplate.test(email)) {
      setEmailError('Email inválido!');
      isError = true;
    }
    if (!message) {
      setMessageError('Preencha este campo!');
      isError = true;
    }

    return isError;
  }

  async function handleSubmit() {
    if (handleErrors()) return;

    try {
      await axios.post('/contact', { name, email, message });
      navigate('/');
    } catch (error) {
      const reason = error as APIResponseReject;
      const data = reason.response.data;
      console.log(data);
      setSubmissionError('Ocorreu um erro ao enviar a mensagem.');
    }
  }

  return (
    <Container>
      <Content>
      <Title>TechTalks</Title>
      <ToggleTheme size={20} style={{ position: 'absolute', right: 20 }} />
        <Title>Fale Conosco!</Title>
        <InputContainer>
          <ComponentInput
            label="Nome"
            type="text"
            name="name"
            id="name"
            placeholder="Seu Nome"
            error={!!nameError}
            value={name}
            onChange={e => setName(e.target.value)}
            autoFocus
          />
          <ErrorMessage>{nameError}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <ComponentInput
            label="Email"
            type="text"
            name="email"
            id="email"
            placeholder="seu_email@email.com"
            error={!!emailError}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <ErrorMessage>{emailError}</ErrorMessage>
        </InputContainer>
        <InputContainer>
        <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Mensagem
          </label>

        <ComponentTextArea
          placeholder="Escreva sua mensagem"
          value={message}
          onChange={e => setMessage(e.target.value)}
           />
          <ErrorMessage>{messageError}</ErrorMessage>
        </InputContainer>
        <SendButton type="button" onClick={handleSubmit}>
          Enviar
        </SendButton>
        {submissionError && <ErrorMessage>{submissionError}</ErrorMessage>}
      </Content>
    </Container>
  );
};

export default ContactUs;
