import React, { useEffect, useState } from 'react';
import GlobalStyles from './styles';
import GlobalFonts from './styles/fonts';
import Homepage from './pages/Homepage';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import colors from './styles/colors';
import { AppTheme } from './utils/types';
import { getStorage, setStorage } from './services/storage';

function App() {
  const [theme, setTheme] = useState<AppTheme>('dark');

  useEffect(() => {
    const value = getStorage('theme') as AppTheme | null;
    if (!value) setStorage('theme', 'dark');
    else if (value === 'light') setTheme(value);
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={colors[theme]}>
        <AppRoutes />
      </ThemeProvider>
      <GlobalFonts />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
