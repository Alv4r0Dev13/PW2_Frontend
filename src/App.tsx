import React from 'react';
import GlobalStyles from './styles'
import GlobalFonts from './styles/fonts';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <GlobalFonts />
      <GlobalStyles />
    </div>
  );
}

export default App;
