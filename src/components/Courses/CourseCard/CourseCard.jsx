import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { StyledCard, StyledNavLink } from './styledComponents.js';
import { CourseForm } from '../CourseForm/CourseForm.jsx';
import { useState } from 'react';
import { fetchDeleteCourse, fetchGetCourseById } from '../../../store/actions/courses.js';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const CourseCard = ({ ...course }) => {
  const dispatch = useDispatch();
  const [CourseFormOpen, setCourseFormOpen] = useState(false);

  const handleDeleteCourse = () => {
    dispatch(fetchDeleteCourse(course.id));
  };

  const handleEditCourse = () => {
    setCourseFormOpen(true);
  };

  const handleViewCourse = () => {
    dispatch(fetchGetCourseById(course.id));
    console.log(dispatch(fetchGetCourseById(course.id)));
  }

  return (
    <>
      <StyledCard>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="primary">
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
          <Button size="small" onClick={handleDeleteCourse} color="error">
            Delete
          </Button>
          <StyledNavLink
            to={`${course.id}`}
            onClick={() => {
              handleViewCourse()
            }}
          >
            view details <ArrowForwardIcon />
          </StyledNavLink>
        </CardActions>
      </StyledCard>

      <CourseForm
        open={CourseFormOpen}
        handleClose={() => setCourseFormOpen(false)}
        edit={course}
      />
    </>
  );
};
