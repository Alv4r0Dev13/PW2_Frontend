import React, { useEffect, useState } from 'react';

import { Container, HeaderLink, ActionsContainer, TitleLink } from './styles';
import { getStorage } from '../../services/storage';
import ToggleTheme from '../ToggleTheme';
import SearchInput from '../SearchInput';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = getStorage('user');
    if (user) setIsLoggedIn(true);
  });

  return (
    <Container>
      <TitleLink to="/">
        <h1>TechTalks</h1>
      </TitleLink>
      <SearchInput />
      <ActionsContainer>
        {!isLoggedIn && (
          <>
            <HeaderLink to="/login">Entrar</HeaderLink>
            <HeaderLink to="/login">Criar conta</HeaderLink>
          </>
        )}
        <ToggleTheme size={30} />
      </ActionsContainer>
    </Container>
  );
};

export default Header;
