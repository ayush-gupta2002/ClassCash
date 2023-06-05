const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const passport = require("passport");
const user = require("../controllers/users");

// router.post('/register', catchAsync(user.register));

router.route("/register").post(catchAsync(user.registerUser));

router.post("/login", passport.authenticate("local"), user.loginUser);

router.get("/logout", user.logoutUser);

// router.get('/logout',user.logout);

module.exports = router;
