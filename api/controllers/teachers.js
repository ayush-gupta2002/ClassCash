import Teacher from "../models/teacher.js";

export const index = async (req, res) => {
    const teachers = await Teacher.find({});
    res.status(200).json(teachers);
}

export const create = async (req, res) => {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json(teacher);
}

export const show = async (req, res) => {
    const { id } = req.params;
    const teacher = await Teacher.findById(id);
    if (!teacher) {
        return res.status(404);
    }
    res.status(200).json(teacher);
}

export const update = async (req, res) => {
    const { id } = req.params;
    const teacher = await Teacher.findByIdAndUpdate(id, { ...req.body });
    await teacher.save();
    res.status(200).json(teacher);
}

export const deleteTeacher = async (req, res) => {
    const { id } = req.params;
    const teacher = await Teacher.findByIdAndDelete(id);
    return res.status(200).json(teacher);
}
