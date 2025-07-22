import { Outlet } from 'react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { NAVIGATION } from './constants.jsx';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { LoginForm } from '../../components/LoginForm/LoginForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { PageContainer } from '@toolpad/core';
import mainLogo from '/CourseLogo.png';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from '../../store/reducers/currentUser.js';

const LogOut = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(signOut())}>
      <LogoutIcon /> Logout
    </Button>
  );
};

export const MainLayout = () => {
  const user = useSelector((state) => state.currentUser);
  return (
    <>
      {!user.isAuth ? (
        <LoginForm />
      ) : (
        <ReactRouterAppProvider
          navigation={NAVIGATION}
          branding={{
            logo: <img alt="Logo" src={mainLogo} />,
            title: 'MUI',
            homeUrl: '/home_work45',
          }}
        >
          <DashboardLayout
            slots={{
              sidebarFooter: LogOut,
            }}
            sx={{ maxWidth: 2000, margin: '0 auto' }}
          >
            <PageContainer title="">
              <Outlet />
            </PageContainer>
          </DashboardLayout>
        </ReactRouterAppProvider>
      )}
    </>
  );
};
