export const setLocalItem = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const getLocalItem = (key: string, defaultValue?: string) =>
  localStorage.getItem(key) ?? defaultValue ?? '';

export const removeLocalItem = (key: string) => {
  const origin = getLocalItem(key);
  localStorage.removeItem(key);
  return origin;
};

export const clearLocal = () => localStorage.clear();
