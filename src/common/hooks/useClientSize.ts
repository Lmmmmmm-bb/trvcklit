import { useEffect, useState } from 'react';

interface IClientSize {
  width: number;
  height: number;
}

export const useClientSize = () => {
  const [clientSize, setClientSize] = useState<IClientSize>({
    width: 0,
    height: 0
  });

  const windowResizeHandler = () => {
    const { clientWidth, clientHeight } = document.body;
    setClientSize({ width: clientWidth, height: clientHeight });
  };

  useEffect(() => {
    windowResizeHandler();
    window.addEventListener('resize', windowResizeHandler);

    return () => {
      window.removeEventListener('resize', windowResizeHandler);
    };
  }, []);

  return clientSize;
};
