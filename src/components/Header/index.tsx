import React, { useEffect, useState } from 'react';

import { Container, HeaderLink, ActionsContainer } from './styles';
import { getStorage } from '../../services/storage';
import ToggleTheme from '../ToggleTheme';
import SearchInput from '../SearchInput';
import { HeaderI } from '../../utils/components';

const Header: React.FC<HeaderI> = ({ showSearch }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = getStorage('user');
    if (user) setIsLoggedIn(true);
  });

  return (
    <Container>
      <h1>TechTalks</h1>
      {showSearch && <SearchInput />}
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
