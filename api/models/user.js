const { Schema, model } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
  teacherId: {
    type: Schema.Types.ObjectId,
    red: "Teacher",
  },
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = model("User", userSchema);
