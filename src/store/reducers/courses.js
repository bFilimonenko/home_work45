import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const coursesAdapter = createEntityAdapter();

const initialState = coursesAdapter.getInitialState();

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: coursesAdapter.addOne,
    deleteCourse: coursesAdapter.removeOne,
    editCourse: coursesAdapter.upsertOne,

    // addCourse: (state, { payload }) => {
    //   state.name = payload.name;
    //   state.description = payload.description;
    //   state.amountOfLessons = payload.amountOfLessons;
    //   state.startDate = payload.startDate;
    // },
  },
});

export const { addCourse,deleteCourse,editCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
