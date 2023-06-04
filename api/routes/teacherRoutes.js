import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express');
const router = express.Router();
const passport = require('passport');

import catchAsync from "../utils/catchAsync.js";
import * as teacher from '../controllers/teachers.js';

router.route('/')
    .get(catchAsync(teacher.index))
    .post(catchAsync(teacher.register))


router.route('/:id')
    .get(catchAsync(teacher.show))
    .put(catchAsync(teacher.update))
    .delete(catchAsync(teacher.deleteTeacher))

router.route('/:id/attendance')
    .get(catchAsync(teacher.allAttendance))
    .post(catchAsync(teacher.createAttendance))

export default router;