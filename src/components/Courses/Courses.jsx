import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { CourseForm } from './CourseForm/CourseForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCourses } from '../../store/selectors/courses.js';
import { CoursesList } from './CoursesList/CoursesList.jsx';
import { StyledBox } from './styledComponents.js';
import { fetchGetAllCourses } from '../../store/actions/courses.js';

//b29a6267-6b50-442e-b9ee-a1e88ee3a452
//0bce0861-be91-4bf7-b3e4-e4621cfda2ab
//d657fe5d-9799-4443-b2cc-e3c2e07da671


export const Courses = () => {
  const [addCourseFormOpen, setAddCourseFormOpen] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(selectAllCourses);

  useEffect(() => {
    dispatch(fetchGetAllCourses());
  }, []);
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

      {!items.length && (
        <Typography variant="subtitle1" color="textDisabled" gutterBottom>
          There is nothing here yet
        </Typography>
      )}

      <CoursesList items={items} />
    </>
  );
};
