import { Schema, model } from 'mongoose';

const compulsoryCourseSchema = new Schema({
    courses: [{
        type: String,
        required: true,
    }],
    sem: {
        type: Number,
        required: true,
        min: 1,
        max: 8
    },
    branch: {
        type: String,
        required: true,
        enum: [
            "Biotechnology",
            "Chemical Engineering",
            "Civil Engineering",
            "Computer Engineering",
            "Electrical Engineering",
            "Electronics and Communication Engineering",
            "Engineering Physics",
            "Environmental Engineering",
            "Information Technology",
            "Mathematics and Computing",
            "Mechanical Engineering",
            "Mechanical with Specialization in Automotive Engineering",
            "Production and Industrial Engineering",
            "Software Engineering",
        ],
    }
});

const Course = model('Course', compulsoryCourseSchema);
export default Course;