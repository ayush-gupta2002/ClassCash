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

// router.post('/login', passport.authenticate('local', { failureRedirect: '/', keepSessionInfo: true }), teacher.login);

// router.post('/login', passport.authenticate('local',))

router.route('/:id')
    .get(catchAsync(teacher.show))
    .put(catchAsync(teacher.update))
    .delete(catchAsync(teacher.deleteTeacher))

export default router;