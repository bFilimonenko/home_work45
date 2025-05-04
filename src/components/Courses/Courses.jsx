import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useState } from 'react';
import { AddCourse } from '../AddCourse/AddCourse.jsx';

export const Courses = () => {
  const [addCourseFormOpen, setAddCourseFormOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        This is Courses List
      </Typography>

      <Button variant="outlined" onClick={() => setAddCourseFormOpen(true)}>
        Add Course
      </Button>
      <AddCourse open={addCourseFormOpen} handleClose={() => setAddCourseFormOpen(false)} />
    </>
  );
};
