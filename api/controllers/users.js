import User from "../models/user.js";
import { createRequire } from "module";
import Teacher from "../models/teacher.js";
import Student from "../models/student.js";
const require = createRequire(import.meta.url);
const jwt = require("jsonwebtoken");
require("dotenv").config();

export const registerUser = async (req, res, next) => {
  const { email, password } = req.body;

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

export const loginUser = async (req, res, next) => {
  const accessToken = jwt.sign(
    { id: req.user.id, isAdmin: req.user.isAdmin },
    process.env.JWT_SEC,
    { expiresIn: "3d" }
  );
  console.log(accessToken);
  let loggedInUser = { ...req.user, accessToken };
  res.status(201).json(loggedInUser);
};

export const logoutUser = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/home");
  });
};
