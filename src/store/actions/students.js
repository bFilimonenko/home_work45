import { createAsyncThunk } from '@reduxjs/toolkit';
import { StudentsRoutes } from '../constants/students.js';
import { serverUrl } from '../constants/server.js';

export const fetchGetAllStudents = createAsyncThunk(StudentsRoutes.GetStudent, async () => {
  const response = await fetch(`${serverUrl}/students`);
  return await response.json();
});