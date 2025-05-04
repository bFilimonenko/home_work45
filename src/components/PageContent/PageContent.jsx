import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Courses } from '../Courses/Courses.jsx';

export const PageContent = ({ pathname }) => {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {pathname === '/courses' && <Courses />}
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
};
