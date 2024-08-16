import React, { useEffect, useState } from 'react';

import { Container, HeaderLink, ActionsContainer, TitleLink } from './styles';
import { getStorage } from '../../services/storage';
import ToggleTheme from '../ToggleTheme';
import SearchInput from '../SearchInput';
import { useLocation } from 'react-router-dom';
import {HeaderProps} from '../../utils/components'

const Header: React.FC<HeaderProps> = ({ onInputChange }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const user = getStorage('user');
    if (user) setIsLoggedIn(true);
  });

  return (
    <Container>
      <TitleLink to="/">
        <h1>TechTalks</h1>
      </TitleLink>
      <SearchInput onInputChange={onInputChange}  />
      <ActionsContainer>
        {!isLoggedIn && (
          <>
            <HeaderLink to="/login" state={{ prev: location.pathname }}>
              Entrar
            </HeaderLink>
            <HeaderLink to="/register" state={{ prev: location.pathname }}>
              Criar conta
            </HeaderLink>
          </>
        )}
        <ToggleTheme size={30} />
      </ActionsContainer>
    </Container>
  );
};

export default Header;
