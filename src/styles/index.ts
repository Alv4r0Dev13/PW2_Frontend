import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const isLightMode = false;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors[isLightMode ? 'light' : 'dark'].backgroundMain};
    color: ${colors[isLightMode ? 'light' : 'dark'].textMain};
    font-family: 'Oxanium';
  }
`;
