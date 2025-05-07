import Typography from '@mui/material/Typography';
import { Courses } from '../Courses/Courses.jsx';
import { StyledBox } from './styledComponents.js';

export const PageContent = ({ pathname }) => {
  return (
    <StyledBox>
      {pathname === '/courses' && <Courses />}
      <Typography>Dashboard content for {pathname}</Typography>
    </StyledBox>
  );
};
