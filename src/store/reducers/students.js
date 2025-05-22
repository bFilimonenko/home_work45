import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchGetAllStudents } from '../actions/students.js';

export const studentsAdapter = createEntityAdapter();

const initialState = studentsAdapter.getInitialState();

const studentsSlice = createSlice({
  name: 'Students',
  initialState,
  reducers: {
    addStudent: studentsAdapter.addOne,
    deleteStudent: studentsAdapter.removeOne,
    editStudent: studentsAdapter.upsertOne,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllStudents.fulfilled, (state, { payload }) => {
      studentsAdapter.addMany(state, payload);
    });
  },
});

export const { addStudent, deleteStudent, editStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
