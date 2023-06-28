const Subject = require('../models/subject');

const index = async (req, res) => {
    const subjects = await Subject.find({});
    res.status(200).json(subjects);
}

const create = async (req, res) => {
    const { name, code } = req.body;
    const subject = new Subject({ name, code });
    await subject.save();
    res.status(201).json(subject);
}

const show = async (req, res) => {
    const { code } = req.params;
    const subject = await Subject.find({ code });
    res.status(200).json(subject);
}

const update = async (req, res) => {
    const { code } = req.params;
    const subject = await Subject.findOneAndUpdate({ code }, { ...req.body });
    res.status(200).json(subject);
}

const deleteSubject = async (req, res) => {
    const { code } = req.params;
    const subject = await Subject.findOneAndDelete({ code });
    res.status(200).json(subject);
}

module.exports = { index, create, show, update, deleteSubject };