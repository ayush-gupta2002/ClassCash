const Batch = require("../models/batch");
const Teacher = require("../models/teacher");
const Attendance = require("../models/attendance");
const Student = require("../models/student");
const Subject = require("../models/subject");

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

  for (let i = 0; i < req.body.batchesInfo.length; i++) {
    try {
      const foundBatch = await Batch.findOne({ name: req.body.batchesInfo[i].batch });
      const foundSubject = await Subject.findOne({ name: req.body.batchesInfo[i].subject });
      newTeacher.batches.push({ batch: foundBatch._id, subject: foundSubject._id });
      foundBatch.teachers.push({ subject: foundSubject._id, teacher: newTeacher._id });
      await foundBatch.save();
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  console.log(newTeacher);
  try {
    await newTeacher.save();
    console.log("teacher created");
    return res.status(201).json(newTeacher);
  } catch (err) {
    return res.status(500).json(err);
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
  const { batchId, teacherId } = req.params;
  console.log("rwquest recieved");

  try {
    const foundRecords = await Attendance.find({
      teacher: teacherId,
      batch: batchId,
    });

    res.status(200).json(foundRecords);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createAttendance = async (req, res) => {
  const { date, batch, absent, present, teacher } = req.body;

  const newDate = new Date(date);

  try {
    const foundBatch = await Batch.findById(batch);
    const foundTeacher = await Teacher.findById(teacher._id);
    let subject = null;

    for (let t of foundBatch.teachers) {
      if (String(t._id) === String(foundTeacher._id)) {
        subject = foundTeacher.subject;
        break;
      }
    }

    if (subject === null) {
      console.log("Teacher is not authorized");
    }
    let flag = false;

    const isValid = foundTeacher.batches.find(
      (b) => String(b) === String(foundBatch._id)
    );

    if (!isValid) {
      console.log("You are not authorized to mess around");
    } else {
      const newAttendance = new Attendance({
        date: newDate,
        teacher: foundTeacher._id,
        batch: foundBatch._id,
        absent: absent,
        present: present,
        subject: subject,
      });

      for (let student of absent) {
        try {
          let foundStudent = await Student.findById(student);
          foundStudent.coins -= 10;
          foundStudent.transactions.push({ coins: -10, source: newAttendance._id });

          if (foundStudent.transactions.length > 10) {
            foundStudent.transactions.splice(0, 1);
          }
          await foundStudent.save();
        } catch (e) {
          console.log(e);
          res.status(500).json(e);
        }
      }

      for (let student of present) {
        try {
          let foundStudent = await Student.findById(student);
          foundStudent.coins += 20;
          foundStudent.transactions.push({ coins: 20, source: newAttendance._id });

          if (foundStudent.transactions.length > 10) {
            foundStudent.transactions.splice(0, 1);
          }
          await foundStudent.save();
        } catch (e) {
          console.log(e);
          res.status(500).json(e);
        }
      }

      await newAttendance.save();
      console.log(newAttendance);
      res.status(200).json(newAttendance);
    }
  } catch (e) {
    console.log(e);
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
