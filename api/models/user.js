import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { Schema, model } from 'mongoose';
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    teacherId: {
        type: Schema.Types.ObjectId,
        red: 'Teacher'
    }
})

userSchema.plugin(passportLocalMongoose ,{usernameField: 'email'});

export default model('User',userSchema);