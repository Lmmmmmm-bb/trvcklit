import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Switch from '@/layouts/switch';
import You from '@/layouts/you';
import Me from '@/layouts/me';

const App: FC = () => {
  return (
    <div style={{ height: '100%' }}>
      <Routes>
        <Route path='/' element={<Switch />} />
        <Route path='/you' element={<You />} />
        <Route path='/me' element={<Me />} />
      </Routes>
    </div>
  );
};

export default App;
