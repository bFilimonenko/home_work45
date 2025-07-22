import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { StyledDialogContent } from './styledComponents.js';
import { useDispatch } from 'react-redux';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fetchEditCourse, fetchSaveCourse } from '../../../store/actions/courses.js';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string(),
  amountOfLessons: Yup.number()
    .required('Amount is required')
    .positive('It must be a positive number'),
  startDate: Yup.date().required('Start date is required'),
});

const initialState = {
  name: '',
  description: '',
  amountOfLessons: '',
  startDate: null,
};

export const CourseForm = ({ open, handleClose, edit }) => {
  const dispatch = useDispatch();

  const isEdit = Boolean(edit);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>{isEdit ? 'Edit Course' : 'Add Course'}</DialogTitle>

      <Formik
        initialValues={edit || initialState}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values) => {
          if (isEdit) {
            dispatch(fetchEditCourse(values));
          } else {
            dispatch(fetchSaveCourse(values));
          }
          handleClose();
        }}
      >
        {({ values, errors, touched, handleChange, setFieldValue }) => (
          <Form>
            <StyledDialogContent>
              <DialogContentText fontWeight="bold">Fill out the form</DialogContentText>

              <TextField
                required
                name="name"
                label="Name"
                variant="outlined"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />

              <TextField
                name="description"
                label="Description"
                multiline
                rows={3}
                value={values.description}
                onChange={handleChange}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
              />

              <TextField
                required
                name="amountOfLessons"
                label="Amount of lessons"
                type="number"
                variant="outlined"
                value={values.amountOfLessons}
                onChange={handleChange}
                error={touched.amountOfLessons && Boolean(errors.amountOfLessons)}
                helperText={touched.amountOfLessons && errors.amountOfLessons}
              />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Start date"
                  value={values.startDate}
                  onChange={(date) => setFieldValue('startDate', date)}
                  slotProps={{
                    textField: {
                      error: touched.startDate && Boolean(errors.startDate),
                      helperText: touched.startDate && errors.startDate,
                    },
                  }}
                />
              </LocalizationProvider>
            </StyledDialogContent>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};
