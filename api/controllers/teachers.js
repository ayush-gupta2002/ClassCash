import Batch from "../models/batch.js";
import Teacher from "../models/teacher.js";
import Attendance from "../models/attendance.js";
import Student from "../models/student.js";

export const index = async (req, res) => {
	const teachers = await Teacher.find({});
	res.status(200).json(teachers);
};

export const register = async (req, res) => {
	console.log(req.body);
	let newTeacher = new Teacher();
	newTeacher.firstName = req.body.info.firstName;
	newTeacher.lastName = req.body.info.lastName;
	newTeacher.branch = req.body.info.branch;
	newTeacher.email = req.body.info.email;

	for (let i = 0; i < 5; i++) {
		try {
			const foundBatch = await Batch.findOne({ name: req.body.batchesInfo[i] });
			newTeacher.batches.push(foundBatch);
			foundBatch.teachers.push(newTeacher._id);
			await foundBatch.save();
		} catch (err) {
			res.status(500).json("Batch could not be found");
		}
	}

	console.log(newTeacher);
	try {
		const res = await newTeacher.save();
		res.status(201).json(newTeacher);
	} catch (err) {
		res.status(500).json(err);
	}
};

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
};

export const update = async (req, res) => {
	const { id } = req.params;
	const teacher = await Teacher.findByIdAndUpdate(id, { ...req.body });
	await teacher.save();
	res.status(200).json(teacher);
};

export const deleteTeacher = async (req, res) => {
	const { id } = req.params;
	const teacher = await Teacher.findByIdAndDelete(id);
	return res.status(200).json(teacher);
};

export const allAttendance = async (req, res) => {
	const { id } = req.params;
	const attendances = await Attendance.find({ teacher: id });
	res.status(201).json(attendances);
}

export const createAttendance = async (req, res) => {
	const { id } = req.params;
	const { date, batch, absent, present } = req.body;

	const newDate = new Date(date.year, date.month, date.date);

	try {
		const foundBatch = await Batch.findOne({ name: batch });
		const newAttendance = new Attendance({ date: newDate, teacher: id, batch: foundBatch, absent: absent, present: present });

		for (let student of absent) {
			try {
				let foundStudent = await Student.findById(student);
				foundStudent.coins -= 10;
				await foundStudent.save();
			}
			catch (e) {
				res.status(500).json(e);
			}
		}

		for (let student of present) {
			try {
				let foundStudent = await Student.findById(student);
				foundStudent.coins += 20;
				await foundStudent.save();
			}
			catch (e) {
				res.status(500).json(e);
			}
		}

		await newAttendance.save();
		res.status(200).json(newAttendance);
	}
	catch (e) {
		res.status(500).json(e);
	}
}

export const showAttendance = async (req, res) => {
	const { attendanceId } = req.params;
	const foundAttendance = await Attendance.findById(attendanceId);
	res.status(201).json(foundAttendance);
}

export const updateAttendance = async (req, res) => {
	const { id, attendanceId } = req.params;
	const { date, batch, absent, present } = req.body;

	const newDate = new Date(date.year, date.month, date.date);

	try {
		const foundBatch = await Batch.findOne({ name: batch });
		const attendance = await Attendance.findByIdAndUpdate(attendanceId, { date: newDate, teacher: id, batch: foundBatch, absent: absent, present: present });
		await attendance.save();
		res.status(200).json(attendance);
	}
	catch (e) {
		res.status(500).json(e);
	}
}

export const deleteAttendance = async (req, res) => {
	const { attendanceId } = req.params;
	const attendance = await Attendance.findByIdAndDelete(attendanceId);
	res.status(201).json(attendance);
}