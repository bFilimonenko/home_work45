import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { LockOutline, Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { signIn } from '../../store/reducers/currentUser.js';
import { StyledBox, StyledForm, StyledImg } from './styledComponents.js';
import mainLogo from '/CourseLogo.png';

const validationSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Too short').required('Required'),
  password: Yup.string().min(3, 'Too short').required('Required'),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = (values) => {
    dispatch(signIn({ login: values.username }));
  };

  return (
    <StyledBox>
      <LockOutline color="primary" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, values }) => (
          <StyledForm>
            <Typography variant="h4" gutterBottom>
              Sign in
            </Typography>

            <TextField
              name="username"
              label="Username"
              variant="outlined"
              value={values.username}
              onChange={handleChange}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
              sx={{ width: '70%' }}
            />

            <FormControl
              variant="outlined"
              sx={{ width: '70%' }}
              error={touched.password && Boolean(errors.password)}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {touched.password && errors.password && (
                <Typography variant="caption" color="error">
                  {errors.password}
                </Typography>
              )}
            </FormControl>

            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </StyledForm>
        )}
      </Formik>
      <StyledImg component="img" alt="Logo" src={mainLogo} />
    </StyledBox>
  );
};
