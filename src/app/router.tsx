import { createHashRouter, RouteObject } from 'react-router-dom';

import Me from '~/layouts/me';
import You from '~/layouts/you';
import Switch from '~/layouts/switch';

const routes: RouteObject[] = [
  { path: '/', element: <Switch /> },
  { path: '/you', element: <You /> },
  { path: '/me', element: <Me /> }
];

export const router = createHashRouter(routes);
