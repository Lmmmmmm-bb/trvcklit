import { createHashRouter, RouteObject } from 'react-router-dom';

import Me from '@/layouts/me';
import Switch from '@/layouts/switch';
import You from '@/layouts/you';

const routes: RouteObject[] = [
  { path: '/', element: <Switch /> },
  { path: '/you', element: <You /> },
  { path: '/me', element: <Me /> }
];

export const router = createHashRouter(routes);
