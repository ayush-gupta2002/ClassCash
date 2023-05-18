import Teacher from "../models/teacher.js";

export const index = async (req, res) => {
    const teachers = await Teacher.find({});
    res.status(200).json(teachers);
}

// export const register = async (req, res) => {
//     try {
//         const { password } = req.body;
//         const teacher = new Teacher(req.body);
//         const newTeacher = await Teacher.register(teacher, password);
//         req.login(newTeacher, err => {
//             if (err) {
//                 return next(err);
//             }
//             res.redirect('/home');
//         })
//         // res.status(201).json(teacher);
//     }
//     catch (e) {
//         res.redirect('/teachers/register');
//     }
// }

// export const login = async (req,res) => {
//     res.redirect('/home');
// }

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
