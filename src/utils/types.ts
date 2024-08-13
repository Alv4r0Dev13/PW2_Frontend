import { AxiosResponse } from 'axios';
import { ErrorType } from './enum';

export type AppTheme = 'dark' | 'light';

export type APIResponse<T> = {
  message: string;
  payload: T;
};

export type APIResponseError = {
  message: string;
  errors: {
    type: ErrorType;
    message: string;
  }[];
};

export type APIResponseFulfill<T> = AxiosResponse<APIResponse<T>, any>;

export type APIResponseReject = {
  response: {
    data: APIResponseError;
  };
};
