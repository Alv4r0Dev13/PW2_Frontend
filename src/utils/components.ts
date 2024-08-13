import type { ReactElement } from 'react';
import { PostE } from './entities';
import React from 'react';
import { CSS } from 'styled-components/dist/types';

export interface PrivateRouteI {
  children: ReactElement<any, any> | null;
}

export interface ToggleThemeI {
  size?: string | number;
  style?: React.CSSProperties;
}

export interface PostComponentI {
  data: PostE;
}

export interface ComponentInputI
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

export interface LogoutModalI {
  onClose: () => void;
  onConfirm: () => void;
}
