const express = require("express");
const router = express.Router();
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

//specific to a particular batch
router
  .route("/attendance/:batchId")
  .get(verifyTokenAndTeacher, catchAsync(teacher.batchAttendance));

//generic routes
router
  .route("/attendance")
  .get(catchAsync(teacher.allAttendance))
  .post(catchAsync(teacher.createAttendance));

//specific to a particular attendance
router
  .route("/:id/attendance/:attendanceId")
  .get(catchAsync(teacher.showAttendance))
  .put(catchAsync(teacher.updateAttendance))
  .delete(catchAsync(teacher.deleteAttendance));

module.exports = router;
