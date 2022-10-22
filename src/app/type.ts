import { ThemeModeEnum } from '~/common/models';

export interface IAppContext {
  themeMode: ThemeModeEnum;
  toggleTheme: () => void;
}
