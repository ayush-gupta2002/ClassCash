import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express');
const router = express.Router();

import catchAsync from "../utils/catchAsync.js";
import * as attendance from "../controllers/attendances.js"

router.route('/')
    .get(catchAsync(attendance.index))
    .post(catchAsync(attendance.create))

export default router;