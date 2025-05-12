import { styled } from 'styled-components';
import { PageContainer } from '@toolpad/core';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

export const StyledPageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: none;
`;

export const StyledDashboardLayout = styled(DashboardLayout)`
    & .MuiBox-root{
    //max-width: 2000px;
    background-color: red;
`;
