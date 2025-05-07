// export const {
//   selectById: selectUserById,
//   selectIds: selectUserIds,
//   selectEntities: selectUserEntities,
//   selectAll: selectAllUsers,
//   selectTotal: selectTotalUsers,
// } = usersAdapter.getSelectors((state) => state.users)

import { coursesAdapter } from '../reducers/courses.js';

export const { selectById: selectCourseById, selectAll: selectAllCourses } =
  coursesAdapter.getSelectors(state => state.courses);
