export const isSystemDarkMode = () =>
  matchMedia('(prefers-color-scheme: dark)').matches;
