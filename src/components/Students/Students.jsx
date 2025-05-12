import { StyledBox } from './styledComponents.js';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { StudentsForm } from './StudentsForm/StudentsForm.jsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllStudents } from '../../store/selectors/students.js';
import { StudentsList } from './StudentsList/StudentsList.jsx';

export const Students = () => {
  const [studentsFormOpen, setStudentsFormOpen] = useState(false);

  const items = useSelector(selectAllStudents);

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
      {!items.length && <Typography variant="subtitle1" color='textDisabled' gutterBottom>There is nothing here yet</Typography>}


      <StudentsList items={items} />
    </>
  );
};
// 'primary'
// | 'secondary'
// | 'success'
// | 'error'
// | 'info'
// | 'warning'
// | 'textPrimary'
// | 'textSecondary'
// | 'textDisabled'
// | string
