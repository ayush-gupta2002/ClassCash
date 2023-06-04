import Student from "../models/student.js";
import Course from "../models/course.js";
import Batch from "../models/batch.js";
import Teacher from "../models/teacher.js";
import Attendance from "../models/attendance.js";

export const index = async (req, res) => {
    const attendances = await Attendance.find({});
    res.status(201).json(attendances);
}

export const create = async (req, res) => {
    const teacher = req.body.teacher;
}