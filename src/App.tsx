import React from 'react';
import GlobalStyles from './styles'
import GlobalFonts from './styles/fonts';
import Homepage from './pages/Homepage';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalFonts />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
