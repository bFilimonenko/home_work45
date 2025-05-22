import { Router } from 'express';

import { v4 as uuidv4 } from 'uuid';

const router = Router();

let students = [];

// CRUD for students
router.get('/', (req, res) => {
  res.json(students);
});

router.get('/:id', (req, res) => {
  const student = students.find((s) => s.id === req.params.id);
  if (!student) return res.status(404).json({ error: 'Student not found' });
  res.json(student);
});

router.post('/', (req, res) => {
  const { fullname, gender, city, dateOfBirth } = req.body;
  const newStudent = {
    id: uuidv4(),
    fullname,
    city,
    gender,
    dateOfBirth,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

router.put('/:id', (req, res) => {
  const student = students.find((s) => s.id === req.params.id);
  if (!student) return res.status(404).json({ error: 'Student not found' });

  student.fullname = req.body.fullname || student.fullname;
  student.gender = req.body.gender || student.gender;
  student.city = req.body.city || student.city;
  student.dateOfBirth = req.body.dateOfBirth || student.dateOfBirth;
  res.json(student);
});

router.delete('/:id', (req, res) => {
  students = students.filter((s) => s.id !== req.params.id);
  res.status(204).send();
});

export default router;
