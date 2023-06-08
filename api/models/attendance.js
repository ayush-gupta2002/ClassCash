const { Schema, model } = require("mongoose");

const attendanceSchema = new Schema({
	date: {
		type: Date,
		required: true,
	},
	teacher: {
		type: Schema.Types.ObjectId,
		ref: "Teacher",
		required: true,
	},
	batch: {
		type: Schema.Types.ObjectId,
		ref: "Batch",
		required: true,
	},
	subject: {
		type: String,
		required: true
	},
	absent: [
		{
			type: Schema.Types.ObjectId,
			ref: "Student",
			required: true,
		},
	],
	present: [
		{
			type: Schema.Types.ObjectId,
			ref: "Student",
			required: true,
		},
	],
});

const Attendance = model("Attendance", attendanceSchema);
module.exports = Attendance;
