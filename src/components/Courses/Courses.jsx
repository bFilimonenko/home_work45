import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useState } from 'react';
import { CourseForm } from './CourseForm/CourseForm.jsx';
import { useSelector } from 'react-redux';
import { selectAllCourses } from '../../store/selectors/courses.js';
import { CoursesList } from './CoursesList/CoursesList.jsx';
import { StyledBox } from './styledComponents.js';

export const Courses = () => {
  const [addCourseFormOpen, setAddCourseFormOpen] = useState(false);

  const items = useSelector(selectAllCourses);

  return (
    <>
      <StyledBox>
        <Typography variant="h5" gutterBottom>
          This is Courses List
        </Typography>

        <Button variant="contained" onClick={() => setAddCourseFormOpen(true)}>
          Add Course
        </Button>
      </StyledBox>
      <CourseForm open={addCourseFormOpen} handleClose={() => setAddCourseFormOpen(false)} />

      {!items.length && <Typography variant="subtitle1" color='textDisabled' gutterBottom>There is nothing here yet</Typography>}

      <CoursesList items={items} />
    </>
  );
};
