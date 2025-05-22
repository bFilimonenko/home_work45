import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { StyledDialogContent } from './styledComponents.js';
import { useEffect, useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editStudent } from '../../../store/reducers/students.js';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fetchSaveStudent } from '../../../store/actions/students.js';

const initialState = {
  fullname: null, // fullname
  gender: null, // gender
  city: null, // city
  dateOfBirth: null, // dateOfBirth
};
// socialNetworkLinks

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

export const StudentsForm = ({ open, handleClose, edit }) => {
  const [formValues, setFormValues] = useState(initialState);
  const dispatch = useDispatch();

  const saveStudent = () => {
    if (edit) {
      dispatch(editStudent({ ...formValues, id: edit.id }));
    } else {
      dispatch(fetchSaveStudent(formValues))
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
            name="fullname"
            label="Name"
            variant="outlined"
            value={formValues.fullname}
            onChange={(e) => setFormValues({ ...formValues, fullname: e.target.value })}
          />

          <FormControl>
            <FormLabel id="gender">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="gender"
              name="gender"
              value={formValues.gender}
              onChange={(e) => setFormValues({ ...formValues, gender: e.target.value })}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="city">City</InputLabel>
            <Select
              labelId="city"
              label="City"
              variant="outlined"
              value={formValues.city}
              onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
            >
              {cities.map((city, index) => (
                <MenuItem key={index} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date Of Birth"
              slotProps={{
                textField: {
                  helperText: 'MM/DD/YYYY',
                },
              }}
              value={formValues.dateOfBirth}
              onChange={(newValue) => {
                setFormValues({ ...formValues, dateOfBirth: newValue });
              }}
            />
          </LocalizationProvider>
        </StyledDialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveStudent}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
