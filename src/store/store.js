import { configureStore } from '@reduxjs/toolkit';
import currentUserReduce from './reducers/currentUser.js';
import coursesReduce from './reducers/courses.js';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReduce,
    courses: coursesReduce,
    // students: studentsReduce,
    // course: courseReduce
  },
});
