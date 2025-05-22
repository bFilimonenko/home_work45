import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchGetAllStudents, fetchSaveStudent } from '../actions/students.js';

export const studentsAdapter = createEntityAdapter();

const initialState = studentsAdapter.getInitialState();

const studentsSlice = createSlice({
  name: 'Students',
  initialState,
  reducers: {
    deleteStudent: studentsAdapter.removeOne,
    editStudent: studentsAdapter.upsertOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllStudents.fulfilled, (state, { payload }) => {
        studentsAdapter.addMany(state, payload);
      })
      .addCase(fetchSaveStudent.fulfilled, (state, { payload }) => {
        studentsAdapter.addOne(state, payload);
      });
  },
});

export const { deleteStudent, editStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
