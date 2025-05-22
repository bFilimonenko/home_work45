import { StyledBox } from './styledComponents.js';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { StudentsForm } from './StudentsForm/StudentsForm.jsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllStudents } from '../../store/selectors/students.js';
import { StudentsList } from './StudentsList/StudentsList.jsx';
import { fetchGetAllStudents } from '../../store/actions/students.js';

export const Students = () => {
  const [studentsFormOpen, setStudentsFormOpen] = useState(false);
  const dispatch = useDispatch();

  const items = useSelector(selectAllStudents);

  useEffect(() => {
    dispatch(fetchGetAllStudents());
  }, []);

  return (
    <>
      <StyledBox>
        <Typography variant="h5" gutterBottom>
          This is Students List
        </Typography>

        <Button variant="contained" onClick={() => setStudentsFormOpen(true)}>
          Add Student
        </Button>
      </StyledBox>
      <StudentsForm open={studentsFormOpen} handleClose={() => setStudentsFormOpen(false)} />

      {/*There is nothing here yet*/}
      {!items.length && (
        <Typography variant="subtitle1" color="textDisabled" gutterBottom>
          There is nothing here yet
        </Typography>
      )}

      <StudentsList items={items} />
    </>
  );
};
