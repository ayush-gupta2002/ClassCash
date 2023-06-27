const { Schema, model } = require("mongoose");

const subjectSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	code: {
		type: String,
		required: true,
		unique: true
	},
	teachers: [{
		type: Schema.Types.ObjectId,
		ref: "Teacher"
	}]
});

const Subject = model("Subject", subjectSchema);
module.exports = Subject;