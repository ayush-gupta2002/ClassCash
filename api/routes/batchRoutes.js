const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const batch = require("../controllers/batches");

router.route("/")
	.get(catchAsync(batch.index))
	.post(catchAsync(batch.create));

router
	.route("/:id")
	.get(catchAsync(batch.show))
	.delete(catchAsync(batch.deleteBatch));

module.exports = router;
