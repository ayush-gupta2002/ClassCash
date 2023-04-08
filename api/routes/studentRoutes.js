import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express');
const router = express.Router();

import catchAsync from "../utils/catchAsync.js";
import * as student from '../controllers/students.js';

router.route('/')
    //we'll check if the person sending the request is a teacher or CR
    .get(catchAsync(student.index))
    .post(catchAsync(student.create))

router.get('/new', student.newForm);

router.route('/:id')
    //     //we'll check if the person sending the request is a teacher,CR, or the student himself
    .get(catchAsync(student.show))
    .put(catchAsync(student.update))
    .delete(catchAsync(student.deleteStudent))

router.get('/:id/edit', catchAsync(student.editForm));

export default router;