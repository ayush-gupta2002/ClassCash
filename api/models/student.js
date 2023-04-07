import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { Schema, model } from 'mongoose';

const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: String,
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    rollNo: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        enum: ['Biotechnology', 'Chemical Engineering', 'Civil Engineering', 'Computer Engineering', 'Electrical Engineering', 'Electronics and Communication Engineering', 'Engineering Physics', 'Environmental Engineering', 'Information Technology', 'Mathematics and Computing', 'Mechanical Engineering', 'Mechanical with Specialization in Automotive Engineering', 'Production and Industrial Engineering', 'Software Engineering'],
        required: true
    },
    courses: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    }
});

const Student = model('Student', StudentSchema);

export default Student;