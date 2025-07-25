import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {
  fetchAssignStudentToCourse,
  fetchDeleteCourse,
  fetchEditCourse,
  fetchGetAllCourses, fetchGetCourseById,
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
      .addCase(fetchGetCourseById.fulfilled, (state, { payload }) => {
        coursesAdapter.upsertOne(state, payload);
      })
      .addCase(fetchSaveCourse.fulfilled, (state, { payload }) => {
        coursesAdapter.addOne(state, payload);
      })
      .addCase(fetchDeleteCourse.fulfilled, (state, action) => {
        coursesAdapter.removeOne(state, action.meta.arg);
      })
      .addCase(fetchEditCourse.fulfilled, (state, { payload }) => {
        coursesAdapter.upsertOne(state, payload);
      })
      .addCase(fetchAssignStudentToCourse.fulfilled, (state, { payload }) => {
        coursesAdapter.upsertOne(state, payload);
      })
  },
});

export default coursesSlice.reducer;
