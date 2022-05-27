import { useEffect, useState } from 'react';
import { ThemeModeEnum } from '../models';
import { isSystemDarkMode } from '../utils/system-theme';

const BODY_THEME_TAG = 'theme-mode';

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState(
    isSystemDarkMode() ? ThemeModeEnum.Dark : ThemeModeEnum.Light
  );

  const toggleTheme = () => {
    const theme =
      themeMode === ThemeModeEnum.Light
        ? ThemeModeEnum.Dark
        : ThemeModeEnum.Light;

    setThemeMode(theme);
  };

  useEffect(() => {
    const body = document.body;
    body.setAttribute(BODY_THEME_TAG, themeMode);
  }, [themeMode]);

  return { themeMode, setThemeMode, toggleTheme };
};
