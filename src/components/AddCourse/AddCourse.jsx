import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { StyledDialogContent } from './styledComponents.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse, editCourse } from '../../store/reducers/courses.js';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const initialState = {
  name: null,
  description: null,
  amountOfLessons: null,
  startDate: null,
};

export const AddCourse = ({ open, handleClose, edit }) => {
  const [formValues, setFormValues] = useState(initialState);

  const [validation, setValidation] = useState({ name: '', amountOfLesson: '' });
  const dispatch = useDispatch();

  const validate = () => {
    if (parseInt(formValues.amountOfLessons) < 1) {
      setValidation({ amountOfLessons: 'It must be a positive number' });
    }
  };

  const saveCourse = () => {
    validate();
    if (edit) {
      dispatch(editCourse({ ...formValues, id: edit.id }));
    } else {
      dispatch(addCourse({ ...formValues, id: Math.random().toString(36).substring(2) }));
    }
    handleClose();
  };

  useEffect(() => {
    if (!edit) setFormValues(initialState);

    setFormValues({ ...edit });
  }, [edit, open]);

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
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
            error={validation.name}
            helperText={validation.name}
            aria-valuemax={20}
          />

          <TextField
            name="description"
            label="Description"
            multiline
            rows={3}
            value={formValues.description}
            onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
          />

          <TextField
            required
            name="amountOfLessons"
            label="Amount of lessons"
            variant="outlined"
            type="number"
            value={formValues.amountOfLessons}
            onChange={(e) => setFormValues({ ...formValues, amountOfLessons: e.target.value })}
            error={validation.amountOfLessons}
            helperText={validation.amountOfLessons}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Start date"
              slotProps={{
                textField: {
                  helperText: 'MM/DD/YYYY',
                },
              }}
              value={formValues.startDate}
              onChange={(value) => {
                setFormValues({ ...formValues, startDate: value });
              }}
            />
          </LocalizationProvider>
        </StyledDialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveCourse}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
