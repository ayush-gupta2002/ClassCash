import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express');
const router = express.Router();

import catchAsync from "../utils/catchAsync.js";
import * as teacher from '../controllers/teachers.js';

router.route('/')
    .get(catchAsync(teacher.index))
    .post(catchAsync(teacher.create))

router.route('/:id')
    .get(catchAsync(teacher.show))
    .put(catchAsync(teacher.update))
    .delete(catchAsync(teacher.deleteTeacher))

export default router;