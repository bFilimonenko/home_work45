import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchGetAllCourses, fetchSaveCourse } from '../actions/courses.js';

export const coursesAdapter = createEntityAdapter();

const initialState = coursesAdapter.getInitialState();

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    deleteCourse: coursesAdapter.removeOne,
    editCourse: coursesAdapter.upsertOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllCourses.fulfilled, (state, { payload }) => {
        coursesAdapter.addMany(state, payload);
      })
      .addCase(fetchSaveCourse.fulfilled, (state, { payload }) => {
        coursesAdapter.addOne(state, payload);
      });
    //remove one
  },
});

export const { deleteCourse, editCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
