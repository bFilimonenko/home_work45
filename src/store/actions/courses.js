import { createAsyncThunk } from '@reduxjs/toolkit';
import { CoursesRoutes } from '../constants/courses.js';
import { serverUrl } from '../constants/server.js';

export const fetchGetAllCourses = createAsyncThunk(CoursesRoutes.GetCourse, async () => {
  const response = await fetch(`${serverUrl}/courses`);
  return await response.json();
});


