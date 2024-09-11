import type { ReactElement } from 'react';
import { PostE, UserE } from './entities';
import React from 'react';

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

export interface UserComponentI {
  data: UserE;
}

export interface ComponentInputI
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

export interface ComponentTextAreaI
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface LogoutModalI {
  onClose: () => void;
  onConfirm: () => void;
}

export interface HeaderProps {
  onInputChange?: (value: string) => void;
}

export interface InputProps {
  onInputChange?: (value: string) => void;
}

export interface SearchProps {
  searchText?: string;
}
