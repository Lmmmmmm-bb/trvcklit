import { FC, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { useTheme } from '@/common/hooks';
import { ThemeModeEnum } from '@/common/models';
import ReloadPrompt from '@/components/reload-prompt';

import { router } from './router';
import { appContext } from './context';

const App: FC = () => {
  const { themeMode, toggleTheme, setThemeMode } = useTheme();

  useEffect(() => {
    matchMedia('(prefers-color-scheme: dark)').addEventListener(
      'change',
      (e) => {
        const isDarkMode = e.matches;
        isDarkMode
          ? setThemeMode(ThemeModeEnum.Dark)
          : setThemeMode(ThemeModeEnum.Light);
      }
    );
  }, []);

  return (
    <appContext.Provider value={{ themeMode, toggleTheme }}>
      <RouterProvider router={router} />
      <ReloadPrompt />
    </appContext.Provider>
  );
};

export default App;
