import { createBrowserRouter, Navigate, Outlet } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import CoursesPage from './pages/CoursesPage';
import StudentsPage from './pages/StudentsPage/index.jsx';
import CoursePage from './pages/CoursePage/index.jsx';

export const router = createBrowserRouter([
  {
    path: '/home_work45',
    element: <MainLayout />,
    children: [
      {
        path: 'courses',
        element: <CoursesPage />,
      },
      {
        path: 'courses/:id',
        element: <CoursePage />,
      },
      {
        path: 'students',
        element: <StudentsPage />,
      },
    ],
    //     },
    //   ],
  },
  // {
  //   path: '/*',
  //   element: (
  //     <>
  //       <Navigate replace to="/" />
  //       <Outlet />
  //     </>
  //   ),
  // },
]);
