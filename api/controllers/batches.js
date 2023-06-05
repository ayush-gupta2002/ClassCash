const Batch = require("../models/batch");

const index = async (req, res) => {
  try {
    const batches = await Batch.find();
    res.status(200).json(batches);
  } catch (err) {
    res.status(500).json(err);
  }
};

const create = async (req, res) => {
  const batch = new Batch(req.body);
  await batch.save();
  res.status(201).json(batch);
};

const show = async (req, res) => {
  const { id } = req.params;
  const batch = await Batch.findById(id)
    .populate("students")
    .populate({
      path: "teachers",
      populate: { path: "teacher" },
    });

  if (!batch) {
    return res.status(404);
  }
  res.status(200).json(batch);
};

const deleteBatch = async (req, res) => {
  const { id } = req.params;
  const batch = await Batch.findByIdAndDelete(id);
  res.status(200).json(batch);
};

module.exports = { index, create, show, deleteBatch };
