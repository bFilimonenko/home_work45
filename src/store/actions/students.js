import { createAsyncThunk } from '@reduxjs/toolkit';
import { StudentsRoutes } from '../constants/students.js';
import { serverUrl } from '../constants/server.js';

export const fetchGetAllStudents = createAsyncThunk(StudentsRoutes.GetStudent, async () => {
  const response = await fetch(`${serverUrl}/students`);
  console.log(await response.json());
  return await response.json();
});

export const fetchSaveStudent = createAsyncThunk(StudentsRoutes.SaveStudent, async (data) => {
  const response = await fetch(`${serverUrl}/students/`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
});

export const fetchDeleteStudent = createAsyncThunk(StudentsRoutes.DeleteStudent, async (id) => {
  await fetch(`${serverUrl}/students/${id}`, {
    method: 'delete',
  });
});

export const fetchEditStudent = createAsyncThunk(StudentsRoutes.EditStudent, async (data) => {
  const response = await fetch(`${serverUrl}/students/${data.id}`, {
    method: 'put',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
});
