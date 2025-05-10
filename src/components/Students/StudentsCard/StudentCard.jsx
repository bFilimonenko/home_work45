import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { DeleteButton, InfoDisplay, StyledAvatar, StyledCard } from './styledComponents.js';
import { styled } from '@mui/system';
import { grey } from '@mui/material/colors';



const DisplayField = ({ label, value }) => (
  <InfoDisplay>
    <Typography className="label" variant="caption">
      {label}
    </Typography>
    <Typography className="value" variant="body1">
      {value}
    </Typography>
  </InfoDisplay>
);

const ProfileHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
});



export const StudentCard = ({ ...student }) => {
  const handleDelete = () => {
    console.log('Delete clicked');
    console.log(student.dateOfBirth.toLocaleString());

    console.dir(student.dateOfBirth.toLocaleString());
  };
  return (
    <StyledCard>
      <DeleteButton onClick={handleDelete}>
        <DeleteIcon />
      </DeleteButton>
      <CardContent>
        <ProfileHeader>
          <StyledAvatar>
            {student.name[0]}
            {/*{student.firstName.charAt(0)}*/}
            {/*{student.lastName.charAt(0)}*/}
          </StyledAvatar>
          <Box>
            <Typography variant="h5" color="primary">
              {student.name}
            </Typography>
            <Typography variant="subtitle1" color={grey[700]}>
              {/*{student.class}*/} social networks
            </Typography>
          </Box>
        </ProfileHeader>
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <DisplayField label="Gender" value={student.gender} />
          <DisplayField label="Birth Date" value={student.dateOfBirth.toLocaleDateString()} />
          {/*<DisplayField label="Class" value={student.class} />*/}
          {/*<DisplayField label="Status" value={student.isAlive ? 'Alive' : 'Deceased'} />*/}
        </Box>
      </CardContent>
    </StyledCard>
  );
};
