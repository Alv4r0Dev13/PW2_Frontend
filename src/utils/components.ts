import type { ReactElement } from 'react';

export interface PrivateRouteI {
  children: ReactElement<any, any> | null;
}

export interface ToggleThemeI {
  size?: string | number;
}

export interface HeaderI {
  showSearch?: boolean;
}
