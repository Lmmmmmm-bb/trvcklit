import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Switch from '@/layouts/switch';
import You from '@/layouts/you';
import Me from '@/layouts/me';
import { appContext } from './context';
import { useTheme } from '@/common/hooks';

const App: FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <appContext.Provider value={{ themeMode, toggleTheme }}>
      <div style={{ height: '100%' }}>
        <Routes>
          <Route path='/' element={<Switch />} />
          <Route path='/you' element={<You />} />
          <Route path='/me' element={<Me />} />
        </Routes>
      </div>
    </appContext.Provider>
  );
};

export default App;
