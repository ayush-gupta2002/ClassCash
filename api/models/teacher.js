import { Schema, model } from 'mongoose';

const teacherSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: String,
    lastName: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        enum: ['Biotechnology', 'Chemical Engineering', 'Civil Engineering', 'Computer Engineering', 'Electrical Engineering', 'Electronics and Communication Engineering', 'Engineering Physics', 'Environmental Engineering', 'Information Technology', 'Mathematics and Computing', 'Mechanical Engineering', 'Mechanical with Specialization in Automotive Engineering', 'Production and Industrial Engineering', 'Software Engineering'],
        required: true
    }
})

teacherSchema.virtual('fullName').get(function () {
    if (this.middleName) {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
    else {
        return `${this.firstName} ${this.lastName}`;
    }
})

const Teacher = model('Teacher', teacherSchema);
export default Teacher;