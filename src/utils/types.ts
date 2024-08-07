export type AppTheme = 'dark' | 'light';

export type ThemeHandler = {
  get: () => AppTheme;
  set: (theme: AppTheme) => void;
  toggle: () => void;
};
