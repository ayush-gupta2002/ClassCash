import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express');
const router = express.Router();

import catchAsync from "../utils/catchAsync.js";
import * as batch from "../controllers/batches.js";

router.route('/')
    .get(catchAsync(batch.index))
    .post(catchAsync(batch.create));

router.route('/:id')
    .get(catchAsync(batch.show))
    .delete(catchAsync(batch.deleteBatch))

export default router;