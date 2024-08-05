import { createGlobalStyle } from 'styled-components';

import OxaniumTtf from './fonts/OxaniumRegular.ttf';
import OxaniumWoff from './fonts/OxaniumRegular.woff';
import OxaniumWoff2 from './fonts/OxaniumRegular.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Oxanium';
    src: local('Oxanium'),
      url(${OxaniumTtf}) format('truetype'),
      url(${OxaniumWoff}) format('woff'),
      url(${OxaniumWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
`;
