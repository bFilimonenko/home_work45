import { createAsyncThunk } from '@reduxjs/toolkit';
import { CoursesRoutes } from '../constants/courses.js';
import { serverUrl } from '../constants/server.js';

export const fetchGetAllCourses = createAsyncThunk(CoursesRoutes.GetAllCourses, async () => {
  const response = await fetch(`${serverUrl}/courses`);
  return await response.json();
});

export const fetchGetCourseById = createAsyncThunk(CoursesRoutes.GetCourseById, async (id) => {
  const response = await fetch(`${serverUrl}/courses/${id}`);
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

export const fetchAssignStudentToCourse = createAsyncThunk(
  CoursesRoutes.AssignStudent,
  async ({ courseId, studentId }) => {
    const response = await fetch(`${serverUrl}/courses/assign-student/${courseId}`, {
      method: 'put',
      body: JSON.stringify({ studentId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  },
);
