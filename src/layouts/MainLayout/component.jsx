import { Outlet } from 'react-router';
import mainLogo from '../../assets/CourseLogo.png';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { NAVIGATION } from './constants.jsx';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { StyledPageContainer } from './styledComponents.js';
import { LoginForm } from '../../components/LoginForm/LoginForm.jsx';
import { useSelector } from 'react-redux';

export const MainLayout = () => {
  const user = useSelector((state) => state.currentUser);
  return (
    <>
      {!user.isAuth && <LoginForm />}

      <ReactRouterAppProvider
        navigation={NAVIGATION}
        branding={{
          logo: <img src={mainLogo} alt="logo" />,
          title: 'MUI',
          homeUrl: '/',
        }}
      >
        <DashboardLayout>
          <StyledPageContainer title="">
            <Outlet />
          </StyledPageContainer>
        </DashboardLayout>
      </ReactRouterAppProvider>
    </>
  );
};
