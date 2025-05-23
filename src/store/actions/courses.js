import { createAsyncThunk } from '@reduxjs/toolkit';
import { CoursesRoutes } from '../constants/courses.js';
import { serverUrl } from '../constants/server.js';

export const fetchGetAllCourses = createAsyncThunk(CoursesRoutes.GetCourse, async () => {
  const response = await fetch(`${serverUrl}/courses`);
  return await response.json();
});

export const fetchSaveCourse = createAsyncThunk(CoursesRoutes.SaveCourse, async (data) => {
  const response = await fetch(`${serverUrl}/courses/`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
});

export const fetchDeleteCourse = createAsyncThunk(CoursesRoutes.DeleteCourse, async (id) => {
  await fetch(`${serverUrl}/courses/${id}`, {
    method: 'delete',
  });
});

export const fetchEditCourse = createAsyncThunk(CoursesRoutes.EditCourse, async (data) => {
  const response = await fetch(`${serverUrl}/courses/${data.id}`, {
    method: 'put',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
});
