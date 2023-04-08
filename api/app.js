import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express');
import mongoose from 'mongoose';

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/classCash');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

import Student from "./models/student.js";
import Teacher from "./models/teacher.js";
import Batch from "./models/batch.js";
import Timetable from "./models/timeTable.js";

const app = express();

app.listen(3000, () => {
    console.log('Serving on port 3000');
})