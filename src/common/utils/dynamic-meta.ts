import { ThemeModeEnum } from '../models';

export const addThemeColorMetaTag = (mode: ThemeModeEnum) => {
  removeThemeColorMetaTag();
  const meta = document.createElement('meta');
  meta.name = 'theme-color';
  meta.content = mode === ThemeModeEnum.Light ? '#f5f5f5' : '#16161a';
  document.head.appendChild(meta);
};

export const removeThemeColorMetaTag = () => {
  const meta = document.querySelector('meta[name="theme-color"]');
  meta && meta.remove();
};
