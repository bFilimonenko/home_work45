import { createBrowserRouter, Navigate, Outlet } from 'react-router';
import { MainLayout } from './layouts/MainLayout/index.js';
import { Courses } from './components/Courses/Courses.jsx';
import { Students } from './components/Students/Students.jsx';

export const router = createBrowserRouter([
  {
    path: '/home_work45',
    element: <MainLayout />,
    children: [
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'students',
        element: <Students />,
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
