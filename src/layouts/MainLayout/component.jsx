import { Outlet } from 'react-router';
// import mainLogo from 'src/assets/CourseLogo.png';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { NAVIGATION } from './constants.jsx';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { LoginForm } from '../../components/LoginForm/LoginForm.jsx';
import { useSelector } from 'react-redux';
import { PageContainer } from '@toolpad/core';

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
            logo: <img alt="Logo" src={"home_work45/src/assets/CourseLogo.png"}/>,
            title: 'MUI',
            homeUrl: '/',
          }}
        >
          <DashboardLayout sx={{ maxWidth: 2000, margin: '0 auto' }}>
            <PageContainer title="">
              <Outlet />
            </PageContainer>
          </DashboardLayout>
        </ReactRouterAppProvider>
      )}
    </>
  );
};
