import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './reducers/currentUser.js';
import coursesReducer from './reducers/courses.js';
import studentsReducer from './reducers/students.js';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    courses: coursesReducer,
    students: studentsReducer,
  },
});
