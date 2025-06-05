const express = require('express');
const { body } = require('express-validator');
const {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} = require('../Controller/StudentController');

const router = express.Router();

const studentValidation = [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('age').isInt({ min: 0 }),
  body('course').notEmpty(),
];

router.post('/addstudent', studentValidation, addStudent);
router.get('/getstudents', getAllStudents);
router.get('/getstudent/:id', getStudentById);
router.put('/updatestudent/:id', studentValidation, updateStudent);
router.delete('/deletestudent/:id', deleteStudent);


module.exports = router;
