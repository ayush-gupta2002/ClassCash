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

const app = express();