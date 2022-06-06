import { useEffect, useState } from 'react';

export const useNetwork = () => {
  const [isOnLine, setIsOnLine] = useState(navigator.onLine);

  const networkEventHandler = () => setIsOnLine(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', networkEventHandler);
    window.addEventListener('offline', networkEventHandler);

    return () => {
      window.removeEventListener('online', networkEventHandler);
      window.removeEventListener('offline', networkEventHandler);
    };
  }, []);

  return isOnLine;
};
