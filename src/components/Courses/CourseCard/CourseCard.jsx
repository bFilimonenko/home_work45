import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { deleteCourse, editCourse } from '../../../store/reducers/courses.js';
import { StyledCard } from './styledComponents.js';
import { AddCourse } from '../../AddCourse/AddCourse.jsx';
import { useState } from 'react';

export const CourseCard = ({ ...course }) => {
  const dispatch = useDispatch();
  const [addCourseFormOpen, setAddCourseFormOpen] = useState(false);


  // const deleteCourse = (course) => {}
  const handleDeleteCourse = () => {
    dispatch(deleteCourse(course.id));
  };

  const handleEditCourse = () => {
    dispatch(editCourse(course));
    setAddCourseFormOpen(true)
  };
  return (
    <>
      <StyledCard>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {course.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleEditCourse}>
            Edit
          </Button>
          <Button size="small" onClick={handleDeleteCourse}>
            Delete
          </Button>
        </CardActions>
      </StyledCard>

      <AddCourse open={addCourseFormOpen} handleClose={() => setAddCourseFormOpen(false)} edit={course} />
    </>
  );
};
