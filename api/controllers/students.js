import { createRequire } from "module";
const require = createRequire(import.meta.url);

import Student from "../models/student.js";

export const index = async (req, res) => {
    const students = await Student.find({});
    res.status(200).json(students);
}

export const create = async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
}

export const show = async (req, res) => {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
        res.status(404);
    }
    res.status(200).json(student);
}

export const update = async (req, res) => {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, { ...req.body });
    await student.save();
    res.status(200).json(student);
}

export const deleteStudent = async (req, res) => {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.status(200);
}