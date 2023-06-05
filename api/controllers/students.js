const Student = require("../models/student");
const Course = require("../models/course");
const Batch = require("../models/batch");

const index = async (req, res) => {
  const students = await Student.find({});
  res.status(200).json(students);
};

const register = async (req, res) => {
  const compulsoryCourses = await Course.findOne({
    sem: req.body.semester,
    branch: req.body.branch,
  });
  try {
    const studentBatch = req.body.batch;
    const foundBatch = await Batch.findOne({ name: studentBatch });
    const newStudent = new Student(req.body);
    newStudent.courses.unshift(...compulsoryCourses.courses);
    newStudent.batch = foundBatch._id;
    newStudent.email = req.body.email;
    await newStudent.save();
    foundBatch.students.push(newStudent);
    await foundBatch.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json(err);
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  if (!student) {
    return res.status(404);
  }
  res.status(200).json(student);
};

const update = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findByIdAndUpdate(id, { ...req.body });
  await student.save();
  res.status(200).json(student);
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  await Student.findByIdAndDelete(id);
  res.status(200);
};

module.exports = { index, register, show, update, deleteStudent };
