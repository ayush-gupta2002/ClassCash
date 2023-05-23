import React, { useState, useForm } from "react";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineBook } from "react-icons/ai";
import classNames from "classnames";
import StudentRegForm from "../components/StudentRegForm";
import TeacherRegForm from "../components/TeacherRegForm";
import CredentialsForm from "../components/CredentialsForm";

function Register() {
  const [visibleForm, setVisibleForm] = useState("Student");
  const studentClasses = classNames({
    flex: true,
    "flex-col": true,
    "border-2": true,
    "border-white": true,
    "p-4": true,
    "hover:bg-white": true,
    "cursor-pointer": true,
    "duration-500": true,
    "text-white": visibleForm !== "Student",
    "hover:text-black": true,
    "bg-white": visibleForm === "Student",
    "text-black": visibleForm === "Student",
  });
  const teacherClasses = classNames({
    flex: true,
    "flex-col": true,
    "border-2": true,
    "border-white": true,
    "p-4": true,
    "hover:bg-white": true,
    "cursor-pointer": true,
    "duration-500": true,
    "text-white": visibleForm !== "Teacher",
    "hover:text-black": true,
    "bg-white": visibleForm === "Teacher",
    "text-black": visibleForm === "Teacher",
  });
  let content = <StudentRegForm></StudentRegForm>;
  if (visibleForm === "Student") {
    content = <StudentRegForm></StudentRegForm>;
  } else {
    content = <TeacherRegForm></TeacherRegForm>;
  }

  return (
    <div className="max-h-screen my-10 bg-black">
      <div className="w-full flex my-6">
        <div className="flex w-fit mx-auto gap-4">
          <div
            className={studentClasses}
            onClick={() => {
              setVisibleForm("Student");
            }}
          >
            <AiOutlineBook className="mx-auto text-3xl"></AiOutlineBook>
            <h3 className="font-semibold mt-2 text-lg mx-auto">Student</h3>
          </div>
          <div
            className={teacherClasses}
            onClick={() => {
              setVisibleForm("Teacher");
            }}
          >
            <GiTeacher className="mx-auto text-3xl"></GiTeacher>
            <h3 className="font-semibold mt-2 text-lg mx-auto">Teacher</h3>
          </div>
        </div>
      </div>
      <div className="flex">{content}</div>
    </div>
  );
}

export default Register;
