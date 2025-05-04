import ClassIcon from '@mui/icons-material/Class';
import PeopleIcon from '@mui/icons-material/People';

export const NAVIGATION = [
  {
    segment: 'courses',
    title: 'Courses',
    icon: <ClassIcon />,
  },
  {
    segment: 'students',
    title: 'Students',
    icon: <PeopleIcon />,
  },
];


export const PAGES = {
  COURSES: './courses',
  STUDENTS: './students',
};
