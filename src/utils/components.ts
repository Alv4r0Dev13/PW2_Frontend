import type { ReactElement } from 'react';
import { PostE } from './entities';

export interface PrivateRouteI {
  children: ReactElement<any, any> | null;
}

export interface ToggleThemeI {
  size?: string | number;
}

export interface PostComponentI {
  data: PostE;
}
