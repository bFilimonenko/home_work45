import { Outlet } from 'react-router';
import { LoginForm } from '../../components/LoginForm/LoginForm.jsx';
import { useSelector } from 'react-redux';
import MainPageLayout from './main.jsx';

export const MainLayout = () => {
  const user = useSelector(state => state.currentUser);


  return (
    <>

      <MainPageLayout />

      {!user.isAuth && <LoginForm />}

      <Outlet />
    </>
  );
};
