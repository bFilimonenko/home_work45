import { coursesAdapter } from '../reducers/courses.js';

export const { selectById: selectCourseById, selectAll: selectAllCourses } =
  coursesAdapter.getSelectors(state => state.courses);
