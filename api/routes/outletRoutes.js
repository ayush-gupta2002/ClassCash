const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const outlet = require("../controllers/outlet");
const passport = require("passport");

router.route("/").post(catchAsync(outlet.create));

router.post("/login", passport.authenticate("local"), outlet.login);

router.get("/logout", outlet.logout);

module.exports = router;
