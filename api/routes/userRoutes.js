import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express');
const router = express.Router();
import catchAsync from '../utils/catchAsync.js';
import passport from 'passport';
import * as user from '../controllers/users.js';

// router.post('/register', catchAsync(user.register));

router.route('/register')
    .post(catchAsync(user.registerUser));

router.post('/login', passport.authenticate('local', { failureRedirect: '/', keepSessionInfo: true, }), user.loginUser);

// router.get('/logout',user.logout);

export default router;