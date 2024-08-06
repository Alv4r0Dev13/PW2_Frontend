import { MoonFilled, SunFilled } from '@ant-design/icons';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import { getStorage } from '../../services/storage';
import colors from '../../styles/colors';
import { ToggleThemeI } from '../../utils/components';

const ToggleTheme: React.FC<ToggleThemeI> = ({ size }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  function handleToggle() {
    // implement later...
  }

  useEffect(() => {
    const theme = getStorage('theme');
    setTheme(theme || 'dark');
  });

  return (
    <Container
      style={{ color: colors[theme].textMain, fontSize: size }}
      onClick={handleToggle}
    >
      {theme === 'dark' ? <MoonFilled /> : <SunFilled />}
    </Container>
  );
};

export default ToggleTheme;
