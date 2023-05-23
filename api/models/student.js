import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { Schema, model } from "mongoose";
const passportLocalMongoose = require("passport-local-mongoose");

const StudentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
  },
  // email: {
  //     type: String,
  //     required: true,
  //     unique: true
  // },
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
  courses: {
    type: [String],
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  isCR: {
    type: Boolean,
    default: false,
  },
  coins: {
    type: Number,
    default: 0,
  },
});

StudentSchema.virtual("fullName").get(function () {
  if (this.middleName) {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  } else {
    return `${this.firstName} ${this.lastName}`;
  }
});

// StudentSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

export default model("Student", StudentSchema);
