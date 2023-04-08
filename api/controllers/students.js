import { createRequire } from "module";
const require = createRequire(import.meta.url);

import Student from "../models/student.js";

export const index = async (req, res) => {
    const students = await Student.find({});
    res.status(200).json(students);
}

export const newForm = (req, res) => {

}

export const create = async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.redirect('/students');
}

export const show = async (req, res) => { }

export const editForm = async (req, res) => { }

export const update = async (req, res) => { }

export const deleteStudent = async (req, res) => { }