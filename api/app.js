import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express');
import mongoose from 'mongoose';

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/classCash');

import Student from "./models/student.js";
import Teacher from "./models/teacher.js";
import Batch from "./models/batch.js";
import Timetable from "./models/timeTable.js";
import User from "./models/user.js";
import Course from "./models/course.js";

import studentRoutes from './routes/studentRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
import batchRoutes from './routes/batchRoutes.js';
import userRoutes from './routes/userRoutes.js';

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const app = express();

app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
    name: 'session',
    secret: 'letsseeifthisisagoodsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + (1000 * 60 * 60 * 24 * 7),
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({ usernameField: 'email' }, User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/batches', batchRoutes);
app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.send('User not found');
})

app.get('/home', (req, res) => {
    res.send('Home Page');
})

app.listen(3000, () => {
    console.log('Serving on port 3000');
})