const Batch = require("../models/batch");
const Teacher = require("../models/teacher");
const Attendance = require("../models/attendance");
const Student = require("../models/student");

const index = async (req, res) => {
	const teachers = await Teacher.find({});
	res.status(200).json(teachers);
};

const register = async (req, res) => {
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

const show = async (req, res) => {
	const { id } = req.params;
	const teacher = await Teacher.findById(id);
	if (!teacher) {
		return res.status(404);
	}
	res.status(200).json(teacher);
};

const update = async (req, res) => {
	const { id } = req.params;
	const teacher = await Teacher.findByIdAndUpdate(id, { ...req.body });
	await teacher.save();
	res.status(200).json(teacher);
};

const deleteTeacher = async (req, res) => {
	const { id } = req.params;
	const teacher = await Teacher.findByIdAndDelete(id);
	return res.status(200).json(teacher);
};

const allAttendance = async (req, res) => {
	const { id } = req.params;
	const attendances = await Attendance.find({ teacher: id });
	res.status(201).json(attendances);
};

//ALL ATTENDANCE OF A BATCH MADE BY A TEACHER

const batchAttendance = async (req, res) => {
	const { batchId } = req.params;
	console.log(req.user.teacherId, batchId);

	try {
		const foundRecords = await Attendance.find({
			teacher: req.user.teacherId,
			batch: batchId,
		});

		res.status(200).json(foundRecords);
	} catch (err) {
		res.status(500).json(err);
	}
};

const createAttendance = async (req, res) => {
	const { id } = req.params;
	const { date, batch, absent, present } = req.body;

	const newDate = new Date(date.year, date.month, date.date);

	try {
		const foundBatch = await Batch.findOne({ name: batch });
		const foundTeacher = await Teacher.findById(req.user.teacherId);

		let flag = false;
		// console.log(foundTeacher);
		console.log(typeof (foundBatch._id));
		console.log(typeof foundBatch);
		console.log(typeof batch);

		const isValid = foundTeacher.batches.find(b => b === foundBatch);

		// for (let batch of foundTeacher.batches) {
		// 	console.log(typeof batch);
		// 	if (foundBatch._id == batch) {
		// 		flag = true;
		// 		console.log(foundBatch._id);
		// 		console.log(batch);
		// 		break;
		// 	}
		// }

		if (!isValid) {
			console.log('You are not authorized to mess around');
			// res.send("You are not authorized to do that");
		}
		else {
			const newAttendance = new Attendance({
				date: newDate,
				teacher: id,
				batch: foundBatch,
				absent: absent,
				present: present,
			});

			for (let student of absent) {
				try {
					let foundStudent = await Student.findById(student);
					foundStudent.coins -= 10;
					await foundStudent.save();
				} catch (e) {
					res.status(500).json(e);
				}
			}

			for (let student of present) {
				try {
					let foundStudent = await Student.findById(student);
					foundStudent.coins += 20;
					await foundStudent.save();
				} catch (e) {
					res.status(500).json(e);
				}
			}

			await newAttendance.save();
			res.status(200).json(newAttendance);
		}
	} catch (e) {
		res.status(500).json(e);
	}
};

const showAttendance = async (req, res) => {
	const { attendanceId } = req.params;
	const foundAttendance = await Attendance.findById(attendanceId);
	res.status(201).json(foundAttendance);
};

const updateAttendance = async (req, res) => {
	const { id, attendanceId } = req.params;
	const { date, batch, absent, present } = req.body;

	const newDate = new Date(date.year, date.month, date.date);

	try {
		const foundBatch = await Batch.findOne({ name: batch });

		// Resetting the previous attendance
		const attendance = await Attendance.findById(attendanceId);
		for (let student of attendance.absent) {
			try {
				let foundStudent = await Student.findById(student);
				foundStudent.coins += 10;
				await foundStudent.save();
			} catch (e) {
				res.status(500).json(e);
			}
		}

		for (let student of attendance.present) {
			try {
				let foundStudent = await Student.findById(student);
				foundStudent.coins -= 20;
				await foundStudent.save();
			} catch (e) {
				res.status(500).json(e);
			}
		}

		attendance.date = newDate;
		attendance.teacher = req.user.teacherId;
		attendance.batch = foundBatch;
		attendance.absent = absent;
		attendance.present = present;

		for (let student of absent) {
			try {
				let foundStudent = await Student.findById(student);
				foundStudent.coins -= 10;
				await foundStudent.save();
			} catch (e) {
				res.status(500).json(e);
			}
		}

		for (let student of present) {
			try {
				let foundStudent = await Student.findById(student);
				foundStudent.coins += 20;
				await foundStudent.save();
			} catch (e) {
				res.status(500).json(e);
			}
		}

		await attendance.save();
		res.status(200).json(attendance);
	} catch (e) {
		res.status(500).json(e);
	}
};

const deleteAttendance = async (req, res) => {
	const { attendanceId } = req.params;
	const attendance = await Attendance.findByIdAndDelete(attendanceId);
	res.status(201).json(attendance);
};

module.exports = {
	index,
	register,
	show,
	update,
	deleteTeacher,
	allAttendance,
	batchAttendance,
	createAttendance,
	showAttendance,
	updateAttendance,
	deleteAttendance,
};
