import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', description: '', startDate: '' };

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: (state, { payload }) => {
      state.name = payload.name;
      state.description = payload.description;
      state.startDate = payload.startDate;
    },
  },
});

export const { addCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
