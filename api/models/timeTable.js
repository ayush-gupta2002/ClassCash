const { Schema, model } = require("mongoose");

const timeTableSchema = new Schema({
  batchId: {
    type: Schema.Types.ObjectId,
    ref: "Batch",
    required: true,
  },
  slots: [
    [
      {
        type: {
          subject: String,
          teacher: {
            type: Schema.Types.ObjectId,
            ref: "Teacher",
          },
        },
      },
    ],
  ],
});

const Timetable = model("Timetables", timeTableSchema);
module.exports = Timetable;
