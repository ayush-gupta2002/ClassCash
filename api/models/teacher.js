import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { Schema, model } from 'mongoose';
const passportLocalMongoose = require('passport-local-mongoose');


const TeacherSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: String,
    lastName: {
        type: String,
        required: true
    },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    branch: {
        type: String,
        enum: ['Biotechnology', 'Chemical Engineering', 'Civil Engineering', 'Computer Engineering', 'Electrical Engineering', 'Electronics and Communication Engineering', 'Engineering Physics', 'Environmental Engineering', 'Information Technology', 'Mathematics and Computing', 'Mechanical Engineering', 'Mechanical with Specialization in Automotive Engineering', 'Production and Industrial Engineering', 'Software Engineering'],
        required: true
    }
})

TeacherSchema.virtual('fullName').get(function () {
    if (this.middleName) {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
    else {
        return `${this.firstName} ${this.lastName}`;
    }
})

// TeacherSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

export default model('Teacher', TeacherSchema);