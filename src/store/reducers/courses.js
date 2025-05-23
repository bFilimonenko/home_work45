import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {
  fetchDeleteCourse,
  fetchEditCourse,
  fetchGetAllCourses,
  fetchSaveCourse,
} from '../actions/courses.js';

export const coursesAdapter = createEntityAdapter();

const initialState = coursesAdapter.getInitialState();

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllCourses.fulfilled, (state, { payload }) => {
        coursesAdapter.addMany(state, payload);
      })
      .addCase(fetchSaveCourse.fulfilled, (state, { payload }) => {
        coursesAdapter.addOne(state, payload);
      })
      .addCase(fetchDeleteCourse.fulfilled, (state, action) => {
        coursesAdapter.removeOne(state, action.meta.arg);
      })
      .addCase(fetchEditCourse.fulfilled, (state, { payload }) => {
        coursesAdapter.upsertOne(state, payload);
      });
  },
});

export default coursesSlice.reducer;
