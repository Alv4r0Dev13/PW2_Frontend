import type { ReactElement } from 'react';
import { CommentE, PostE, UserE } from './entities';
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
  isButtonEnabled: boolean;
}

export interface CommentComponentI {
  data: CommentE;
  haveOptions: boolean;
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

export interface GeneralModalI {
  onClose: () => void;
  onConfirm: () => void;
  text: string;
  confirmText: string;
  cancelText: string;
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

export interface CreatePostContainerI {
  type: 'post' | 'comment';
  title?: string;
  content: string;
  onChangeTitle?: React.ChangeEventHandler<HTMLInputElement>;
  onChangeContent: React.ChangeEventHandler<HTMLTextAreaElement>;
  onClickPost: React.MouseEventHandler<HTMLButtonElement>;
  onClickCancel?: React.MouseEventHandler<HTMLButtonElement>;
  allowCancel?: boolean;
}
