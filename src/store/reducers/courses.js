import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchGetAllCourses } from '../actions/courses.js';

export const coursesAdapter = createEntityAdapter();

const initialState = coursesAdapter.getInitialState();

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: coursesAdapter.addOne,
    deleteCourse: coursesAdapter.removeOne,
    editCourse: coursesAdapter.upsertOne,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllCourses.fulfilled, (state, { payload }) => {
      coursesAdapter.addMany(state, payload);
    });
  },
});

export const { addCourse, deleteCourse, editCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
