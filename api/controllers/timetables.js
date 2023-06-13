const Batch = require("../models/batch");
const Teacher = require("../models/teacher");
const Attendance = require("../models/attendance");
const Student = require("../models/student");
const Timetable = require("../models/timeTable");
const User = require("../models/user");

const index = async (req, res) => {
    const timetables = await Timetable.find({});
    res.status(201).json(timetables);
}

const create = async (req, res) => {
    const { batch, slots } = req.body;
    try {
        const foundBatch = await Batch.findOne({ name: batch });
        const timetable = new Timetable({ batchId: foundBatch, slots: slots });
        await timetable.save();
        res.status(200).json(timetable);
    }
    catch (e) {
        res.status(500).json(e);
    }
}

const show = async (req, res) => {
    const { id } = req.params;
    const timetable = await Timetable.findById(id);
    if (!timetable) {
        return res.status(404);
    }
    res.status(201).json(timetable);
}

const update = async (req, res) => {
    const { id } = req.params;
    const { batch, slots } = req.body;

    try {
        const foundUser = await User.findById(req.user.id);
        if (!foundUser) {
            return res.status(401).send(req.user.id);
        }
        if (foundUser.teacherId) {
            return res.status(401).json(foundUser);
        }
        if (foundUser.studentId) {
            const foundStudent = await Student.findById(foundUser.studentId);
            if (!foundStudent || !foundStudent.isCR) {
                return res.status(401).send('Not authorized');
            }
        }
        const foundBatch = await Batch.findOne({ name: batch });
        const timetable = await Timetable.findById(id);
        timetable.batchId = foundBatch._id;
        timetable.slots = slots;
        await timetable.save();
        res.status(200).json(timetable);
    }
    catch (e) {
        res.status(500).json(e);
    }
}

module.exports = { index, create, show, update };