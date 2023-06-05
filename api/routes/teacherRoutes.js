const express = require("express");
const router = express.Router();
const passport = require("passport");
const catchAsync = require("../utils/catchAsync");
const teacher = require("../controllers/teachers");
const { verifyTokenAndTeacher } = require("../routes/verifyToken");

router
  .route("/")
  .get(catchAsync(teacher.index))
  .post(catchAsync(teacher.register));

router
  .route("/:id")
  .get(catchAsync(teacher.show))
  .put(catchAsync(teacher.update))
  .delete(catchAsync(teacher.deleteTeacher));

router
  .route("/attendance/:batchId")
  .get(verifyTokenAndTeacher, catchAsync(teacher.batchAttendance));

router
  .route("/:id/attendance")
  .get(catchAsync(teacher.allAttendance))
  .post(catchAsync(teacher.createAttendance));

router
  .route("/:id/attendance/:attendanceId")
  .get(catchAsync(teacher.showAttendance))
  .put(catchAsync(teacher.updateAttendance))
  .delete(catchAsync(teacher.deleteAttendance));

module.exports = router;
