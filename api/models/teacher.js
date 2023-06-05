const { Schema, model } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const TeacherSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  branch: {
    type: String,
    enum: [
      "Biotechnology",
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Engineering",
      "Electrical Engineering",
      "Electronics and Communication Engineering",
      "Engineering Physics",
      "Environmental Engineering",
      "Information Technology",
      "Mathematics and Computing",
      "Mechanical Engineering",
      "Mechanical with Specialization in Automotive Engineering",
      "Production and Industrial Engineering",
      "Software Engineering",
    ],
    required: true,
  },
  batches: [
    {
      type: Schema.Types.ObjectId,
      ref: "Batch",
    },
  ],
});

TeacherSchema.virtual("fullName").get(function () {
  if (this.middleName) {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  } else {
    return `${this.firstName} ${this.lastName}`;
  }
});

// TeacherSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const Teacher = model("Teacher", TeacherSchema);
module.exports = Teacher;
