const User = require("../models/user");
const Teacher = require("../models/teacher");
const Student = require("../models/student");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);

  let studentId = null;
  let teacherId = null;

  if (req.body.teacher) {
    try {
      const foundTeacher = await Teacher.findOne({ email: req.body.email });
      teacherId = foundTeacher._id;
    } catch (err) {
      res.status(500).json("Teacher not found");
    }
  } else if (req.body.student) {
    try {
      const foundStudent = await Student.findOne({ email: req.body.email });
      studentId = foundStudent._id;
    } catch (err) {
      res.status(500).json("Student not found");
    }
  }
  const user = new User({ email, studentId, teacherId });

  try {
    const newUser = await User.register(user, password);
    res.status(201).json(newUser);
  } catch (e) {
    res.status(404).send(e);
  }
};

const loginUser = async (req, res, next) => {
  let accessToken;
  console.log(req.user.teacherId);
  if (req.user.teacherId) {
    accessToken = jwt.sign(
      { id: req.user.id, isTeacher: true, teacherId: req.user.teacherId },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
  } else if (req.user.studentId) {
    accessToken = jwt.sign(
      { id: req.user.id, isStudent: true, studentId: req.user.studentId },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
  }
  let loggedInUser = { ...req.user, accessToken };
  console.log(loggedInUser);
  res.status(201).json(loggedInUser);
};

const logoutUser = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/home");
  });
};

module.exports = { loginUser, logoutUser, registerUser };
