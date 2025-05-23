import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchDeleteStudent, fetchGetAllStudents, fetchSaveStudent } from '../actions/students.js';

export const studentsAdapter = createEntityAdapter();

const initialState = studentsAdapter.getInitialState();

const studentsSlice = createSlice({
  name: 'Students',
  initialState,
  reducers: {
    editStudent: studentsAdapter.upsertOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllStudents.fulfilled, (state, { payload }) => {
        studentsAdapter.addMany(state, payload);
      })
      .addCase(fetchSaveStudent.fulfilled, (state, { payload }) => {
        studentsAdapter.addOne(state, payload);
      })
      .addCase(fetchDeleteStudent.fulfilled, (state, action) => {
        studentsAdapter.removeOne(state, action.meta.arg);
      });
  },
});

export const { editStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
