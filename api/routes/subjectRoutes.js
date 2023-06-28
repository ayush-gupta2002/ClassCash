const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const subject = require('../controllers/subjects');

router.route('/')
    .get(catchAsync(subject.index))
    .post(catchAsync(subject.create))

router.route('/:code')
    .get(catchAsync(subject.show))
    .put(catchAsync(subject.update))
    .delete(catchAsync(subject.deleteSubject))

module.exports = router;