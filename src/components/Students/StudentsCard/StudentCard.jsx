import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ProfileHeader, StyledAvatar, StyledCard, StyledCardActions } from './styledComponents.js';
import { IconButton } from '@mui/material';
import { InfoDisplay } from './InfoDisplay.jsx';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { StudentsForm } from '../StudentsForm/StudentsForm.jsx';
import { fetchDeleteStudent } from '../../../store/actions/students.js';

export const StudentCard = ({ ...student }) => {
  const dispatch = useDispatch();
  const [StudentFormOpen, setStudentFormOpen] = useState(false);

  const handleEditStudent = () => {
    setStudentFormOpen(true);
  };
  const handleDeleteStudent = () => {
    console.log('Delete clicked');
    dispatch(fetchDeleteStudent(student.id));
  };

  return (
    <>
      <StyledCard>
        <StyledCardActions>
          <IconButton onClick={handleEditStudent} color="primary">
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDeleteStudent} color="error">
            <DeleteIcon />
          </IconButton>
        </StyledCardActions>

        <CardContent>
          <ProfileHeader>
            <StyledAvatar>{student.fullname[0]}</StyledAvatar>
            <Box>
              <Typography variant="h5" color="primary">
                {student.fullname}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                social networks
              </Typography>
            </Box>
          </ProfileHeader>
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <InfoDisplay label="Gender" value={student.gender} />
            <InfoDisplay label="Birth Date" value={new Date(student.dateOfBirth).toLocaleDateString()} />
            <InfoDisplay label="City" value={student.city} />
          </Box>
        </CardContent>
      </StyledCard>

      <StudentsForm
        open={StudentFormOpen}
        handleClose={() => setStudentFormOpen(false)}
        edit={student}
      />
    </>
  );
};
