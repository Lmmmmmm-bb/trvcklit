import { createContext } from 'react';
import { ThemeModeEnum } from '~/common/models';
import { isSystemDarkMode } from '~/common/utils';
import { IAppContext } from './type';

export const appContext = createContext<IAppContext>({
  themeMode: isSystemDarkMode() ? ThemeModeEnum.Dark : ThemeModeEnum.Light,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {}
});
