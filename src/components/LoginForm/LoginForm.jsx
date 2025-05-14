import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { LockOutline, Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { StyledBox, StyledForm, StyledImg } from './styledComponents.js';
import Typography from '@mui/material/Typography';
import { signIn } from '../../store/reducers/currentUser.js';

export const LoginForm = () => {
  const [loginValues, setLoginValues] = useState({
    username: '',
    password: '',
  });
  const [valueErrors, setValueErrors] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const signIntoSite = () => {
    if (loginValues.username.length < 3 || loginValues.password.length < 3) {
      setValueErrors(true);
      return;
    }
    setValueErrors(false);
    dispatch(signIn({ login: loginValues.username }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <StyledBox>
      <LockOutline color="primary" />
      <StyledForm>
        <Typography variant="h4" gutterBottom>
          Sign in
          {valueErrors && <Typography color="error">Too short values</Typography>}
        </Typography>
        <TextField
          onChange={(e) => setLoginValues({ ...loginValues, username: e.target.value })}
          value={loginValues.username}
          label="Username"
          variant="outlined"
          name="username"
          required
          sx={{ width: '70%' }}
        />
        <FormControl variant="outlined" required sx={{ width: '70%' }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            onChange={(e) => setLoginValues({ ...loginValues, password: e.target.value })}
            value={loginValues.password}
            label="Password"
            id="password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? 'hide the password' : 'display the password'}
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="outlined" onClick={signIntoSite}>
          Submit
        </Button>
      </StyledForm>
      <StyledImg component="img" alt="Logo" src="home_work45/src/assets/CourseLogo.png"></StyledImg>
    </StyledBox>
  );
};
