const { Schema, model } = require("mongoose");

const batchSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  teachers: {
    type: [
      {
        subject: {
          type: Schema.Types.ObjectId,
          ref: "Subject",
        },
        teacher: {
          type: Schema.Types.ObjectId,
          ref: "Teacher",
        },
      },
    ],
    required: true,
  },
  CR: {
    type: Schema.Types.ObjectId,
  },
});

batchSchema.virtual("strength").get(function () {
  return this.students.length;
});

batchSchema.virtual("branch").get(function () {
  return this.students[0].branch;
});

const Batch = model("Batch", batchSchema);
module.exports = Batch;
