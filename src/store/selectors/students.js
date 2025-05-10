import { studentsAdapter } from '../reducers/students.js';

export const { selectById: selectStudentById, selectAll: selectAllStudents } =
  studentsAdapter.getSelectors((state) => state.students);
