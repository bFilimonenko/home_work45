import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCourseById } from '../../store/selectors/courses.js';
import { fetchAssignStudentToCourse, fetchGetCourseById } from '../../store/actions/courses.js';
import { selectAllStudents } from '../../store/selectors/students.js';
import { Button } from '@mui/material';

const CoursePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => selectCourseById(state, id));
  const students = useSelector(selectAllStudents);

  useEffect(() => {
    dispatch(fetchGetCourseById(id));
  }, [dispatch, id]);

  const handleAssign = (studentId) => {
    dispatch(fetchAssignStudentToCourse({ courseId: id, studentId }));
  };

  if (!course) return <p>Loading...</p>;

  const assignedStudents = course.students
    .map((id) => students.find((s) => s.id === id))
    .filter(Boolean);

  const unassignedStudents = students.filter((student) => !course.students.includes(student.id));

  return (
    <div>
      <h1>{course.name}</h1>

      <h2>Students</h2>
      <ul>
        {assignedStudents.map((student) => (
          <li key={student.id}>{student.fullname}</li>
        ))}
      </ul>

      <h3>Assign student</h3>
      {unassignedStudents.map((student) => (
        <Button key={student.id} onClick={() => handleAssign(student.id)}>
          {student.fullname}
        </Button>
      ))}
    </div>
  );
};

export default CoursePage;
