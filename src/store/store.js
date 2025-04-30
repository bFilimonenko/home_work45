import { configureStore } from '@reduxjs/toolkit';
import currentUserReduce from './reducers/currentUser.js';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReduce,
    // courses: coursesReduce,
    // students: studentsReduce,
    // course: courseReduce
  },
});
