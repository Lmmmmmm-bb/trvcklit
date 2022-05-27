import { useEffect, useState } from 'react';
import { ThemeModeEnum } from '../models';
import { isSystemDarkMode } from '../utils/system-theme';

const BODY_THEME_TAG = 'theme-mode';

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeModeEnum>(
    isSystemDarkMode() ? ThemeModeEnum.Dark : ThemeModeEnum.Light
  );

  const toggleTheme = () => {
    const body = document.body;
    const theme =
      themeMode === ThemeModeEnum.Light
        ? ThemeModeEnum.Dark
        : ThemeModeEnum.Light;

    setThemeMode(theme);
    body.setAttribute(BODY_THEME_TAG, theme);
  };

  useEffect(() => {
    const body = document.body;
    body.setAttribute(BODY_THEME_TAG, themeMode);
  }, []);

  return { themeMode, toggleTheme };
};
