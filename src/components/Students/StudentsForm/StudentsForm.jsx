import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { StyledDialogContent } from './styledComponents.js';
import { fetchSaveStudent } from '../../../store/actions/students.js';
import { fetchEditCourse } from '../../../store/actions/courses.js';

const cities = [
  'Berdiansk',
  'Brovary',
  'Chernihiv',
  'Chernivtsi',
  'Chernivtsi',
  'Dnipro',
  'Donetsk',
  'Horlivka',
  'Ivano-Frankivsk',
  'Kamianets-Podilskyi',
  'Kamianske',
  'Kharkiv',
  'Kharkiv',
  'Kherson',
  'Khmelnytskyi',
  'Konotop',
  'Kramatorsk',
  'Kremenchuk',
  'Kropyvnytskyi',
  'Kyiv',
  'Luhansk',
  'Lutsk',
  'Lviv',
  'Lysychansk',
  'Mariupol',
  'Melitopol',
  'Mukachevo',
  'Mykolaiv',
  'Nikopol',
  'Odesa',
  'Pavlohrad',
  'Poltava',
  'Rivne',
  'Sevastopol',
  'Simferopol',
  'Sumy',
  'Ternopil',
  'Uman',
  'Uzhhorod',
  'Vinnytsia',
  'Zaporizhzhia',
  'Zhytomyr',
];

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required('Required'),
  gender: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  dateOfBirth: Yup.date()
    .nullable()
    .required('Required')
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 16)),
      'Student must be at least 16 years old'
    ),
});

export const StudentsForm = ({ open, handleClose, edit }) => {
  const dispatch = useDispatch();

  const initialValues = {
    fullname: edit?.fullname || '',
    gender: edit?.gender || '',
    city: edit?.city || '',
    dateOfBirth: edit?.dateOfBirth || null,
  };

  const handleSubmit = (values) => {
    if (edit) {
      dispatch(fetchEditCourse({ ...edit, ...values }));
    } else {
      dispatch(fetchSaveStudent(values));
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>{edit ? 'Edit Student' : 'Add Student'}</DialogTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, setFieldValue }) => (
          <Form>
            <StyledDialogContent>
              <DialogContentText fontWeight="bold">
                {edit ? 'Update the form' : 'Fill out the form'}
              </DialogContentText>

              <TextField
                fullWidth
                required
                name="fullname"
                label="Full Name"
                value={values.fullname}
                onChange={handleChange}
                error={touched.fullname && Boolean(errors.fullname)}
                helperText={touched.fullname && errors.fullname}
                margin="normal"
              />

              <FormControl component="fieldset" margin="normal">
                <FormLabel>Gender</FormLabel>
                <RadioGroup row name="gender" value={values.gender} onChange={handleChange}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
                {touched.gender && errors.gender && (
                  <p style={{ color: 'red', fontSize: '0.8em' }}>{errors.gender}</p>
                )}
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel>City</InputLabel>
                <Select
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  error={touched.city && Boolean(errors.city)}
                >
                  {cities.map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
                {touched.city && errors.city && (
                  <p style={{ color: 'red', fontSize: '0.8em' }}>{errors.city}</p>
                )}
              </FormControl>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Birth"
                  value={values.dateOfBirth}
                  onChange={(value) => setFieldValue('dateOfBirth', value)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      margin: 'normal',
                      error: touched.dateOfBirth && Boolean(errors.dateOfBirth),
                      helperText: touched.dateOfBirth && errors.dateOfBirth,
                    },
                  }}
                />
              </LocalizationProvider>
            </StyledDialogContent>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained">
                {edit ? 'Save Changes' : 'Submit'}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};
