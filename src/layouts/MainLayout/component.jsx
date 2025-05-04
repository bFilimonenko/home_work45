import { Outlet } from 'react-router';
import { LoginForm } from '../../components/LoginForm/LoginForm.jsx';
import { useSelector } from 'react-redux';
import mainLogo from '../../assets/CourseLogo.png';
import { demoTheme } from '../../tools/theme.js';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContent } from '../../components/PageContent/PageContent.jsx';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useDemoRouter } from '@toolpad/core/internal';
import { NAVIGATION } from './constants.jsx';

export const MainLayout = () => {
  const user = useSelector((state) => state.currentUser);
  const router = useDemoRouter('/home_work45');

  return (
    <>
      <AppProvider
        navigation={NAVIGATION}
        branding={{
          logo: <img src={mainLogo} alt="logo" />,
          title: 'MUI',
          homeUrl: '/home_work45',
        }}
        router={router}
        theme={demoTheme}
      >
        <DashboardLayout>
          <PageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>

      {!user.isAuth && <LoginForm />}
      <Outlet />
    </>
  );
};
