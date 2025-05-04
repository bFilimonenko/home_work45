import { createBrowserRouter, Navigate, Outlet } from 'react-router';
import { MainLayout } from './layouts/MainLayout/index.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'courses',
        element: (
          <p>courses</p>
        ),
      },
      {
        path: 'students',
        element: (
          <p>students</p>
        ),
      },
    ],
  },
  {
    path: '/*',
    element: (
      <>
        <Navigate replace to="/" />
        <Outlet />
      </>
    ),
  },
]);
