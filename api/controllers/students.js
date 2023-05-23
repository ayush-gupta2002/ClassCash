import Student from "../models/student.js";
import Course from "../models/course.js";

export const index = async (req, res) => {
  const students = await Student.find({});
  res.status(200).json(students);
};

export const register = async (req, res) => {
  // const compulsoryCourses = await Course.findOne({ sem: req.body.semester, branch: req.body.branch });
  try {
    console.log("student", req.body);
    const student = new Student(req.body);
    // student.courses.unshift(...compulsoryCourses.courses);
    const res = await student.save();
    res.status(201).json(res);
  } catch (err) {
    res.status(500).json(err);
  }
};

// export const register = async (req, res) => {
//     try {
//         const { password } = req.body;
//         const student = new Student(req.body);
//         const newStudent = await Student.register(student, password);
//         req.login(newStudent, err => {
//             if (err) {
//                 return next(err);
//             }
//             res.redirect('/home');
//         })
//         res.status(201).json(newStudent);
//     }
//     catch (e) {
//         res.send(e)
//         // res.redirect('/students/register');
//     }
// }

// export const login = (req, res) => {
//     res.send('Student found');
//     res.redirect('/home');
// }

export const show = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  if (!student) {
    return res.status(404);
  }
  res.status(200).json(student);
};

export const update = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findByIdAndUpdate(id, { ...req.body });
  await student.save();
  res.status(200).json(student);
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  await Student.findByIdAndDelete(id);
  res.status(200);
};
