import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

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
});

export const { addStudent,deleteStudent,editStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
