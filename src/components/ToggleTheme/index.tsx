import { MoonFilled, SunFilled } from '@ant-design/icons';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import { getStorage, setStorage } from '../../services/storage';
import colors from '../../styles/colors';
import { ToggleThemeI } from '../../utils/components';
import { AppTheme } from '../../utils/types';

const ToggleTheme: React.FC<ToggleThemeI> = ({ size, style }) => {
  const [theme, setTheme] = useState<AppTheme>('dark');

  function handleToggle() {
    const value = getStorage('theme');
    if (!value || value === 'dark') setStorage('theme', 'light');
    else setStorage('theme', 'dark');
    window.location.reload();
  }

  useEffect(() => {
    const theme = getStorage('theme') as AppTheme | null;
    setTheme(theme || 'dark');
  });

  return (
    <Container
      style={{ color: colors[theme].textMain, fontSize: size, ...style }}
      onClick={handleToggle}
    >
      {theme === 'light' ? <SunFilled /> : <MoonFilled />}
    </Container>
  );
};

export default ToggleTheme;
