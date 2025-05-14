import { createSlice } from '@reduxjs/toolkit';

const initialState = { isAuth: false, login: '', lastSignedIn: '' };

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    signIn: (state, { payload }) => {
      state.isAuth = true;
      state.login = payload.login;
      state.lastSignedIn = Date.now();
    },
    signOut: (state) => {
      state.isAuth = false;
      state.login = '';
      state.lastSignedIn = '';
    },
  },
});

export const { signIn, signOut } = currentUserSlice.actions;
export default currentUserSlice.reducer;