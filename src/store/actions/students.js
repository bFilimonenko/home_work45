import { createAsyncThunk } from '@reduxjs/toolkit';
import { StudentsRoutes } from '../constants/students.js';
import { serverUrl } from '../constants/server.js';

export const fetchGetAllStudents = createAsyncThunk(StudentsRoutes.GetStudent, async () => {
  const response = await fetch(`${serverUrl}/students`);
  return await response.json();
});

export const fetchSaveStudent = createAsyncThunk(StudentsRoutes.SaveStudent, async (data) => {
  await fetch(`${serverUrl}/students/`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
});
