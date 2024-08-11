import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import { getStorage } from '../services/storage';
import { AppTheme } from '../utils/types';

const theme = (getStorage('theme') as AppTheme | null) || 'dark';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors[theme].backgroundMain};
    color: ${colors[theme].textMain};
    font-family: 'Oxanium';
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'Oxanium';
    cursor: pointer;
    border: none;
    border-radius: 10px;
  }
`;
