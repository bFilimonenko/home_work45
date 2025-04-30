import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signIn } from '../../store/reducers/currentUser.js';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const signIntoSite = values => {
    dispatch(signIn({ login: values.username }));
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <TextField
        label="Username"
        variant="outlined"
        name="username"
        required
      />
      <FormControl variant="outlined" required>
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          label="Password"
          id="password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button variant="outlined" onClick={signIntoSite}>Submit</Button>
    </form>
  );
};