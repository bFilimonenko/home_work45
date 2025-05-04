import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StyledDialogContent } from './styledComponents.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../store/reducers/courses.js';

export const AddCourse = ({ open, handleClose }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    startDate: new Date(),
  });

  const [nameValidation, setNameValidation] = useState({ name: '' });
  const dispatch = useDispatch();

  const validate = () => {
    if (formValues.name.length > 40) {
      setNameValidation({ name: 'The name is too long' });
      return
    }
    saveCourse()
    console.log(formValues);
  };

  const saveCourse = () => {
    dispatch(addCourse({...formValues}));
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>Add Course</DialogTitle>
        <StyledDialogContent>
          <DialogContentText fontWeight="bold">Fill out the form</DialogContentText>
          <TextField
            required
            name="name"
            label="Name"
            variant="outlined"
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
            error={nameValidation.name}
            helperText={nameValidation.name}
          />

          <TextField
            name="description"
            label="Description"
            multiline
            rows={3}
            onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start date"
              slotProps={{
                textField: {
                  helperText: 'MM/DD/YYYY',
                },
              }}
              format="DD/MM/YYYY"
              onChange={(date) => setFormValues({ ...formValues, startDate: new Date(date) })}
            />
          </LocalizationProvider>
        </StyledDialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              validate();
              console.log('test');
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
