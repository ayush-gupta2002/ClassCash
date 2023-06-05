const express = require("express");
const router = express.Router();
const passport = require("passport");
const catchAsync = require("../utils/catchAsync");
const student = require("../controllers/students");

router
  .route("/")
  //we'll check if the person sending the request is a teacher or CR
  .get(catchAsync(student.index))
  .post(catchAsync(student.register));

// router.post('/login', passport.authenticate('local', { failureRedirect: '/', keepSessionInfo: true }), student.login);

router
  .route("/:id")
  //     //we'll check if the person sending the request is a teacher,CR, or the student himself
  .get(catchAsync(student.show))
  .put(catchAsync(student.update))
  .delete(catchAsync(student.deleteStudent));

module.exports = router;
