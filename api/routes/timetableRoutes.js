const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const timetable = require("../controllers/timetables");

router.route("/")
    .get(catchAsync(timetable.index))
    .post(catchAsync(timetable.create))

router.route("/:id")
    .get(catchAsync(timetable.show))
    .put(catchAsync(timetable.update))

module.exports = router;