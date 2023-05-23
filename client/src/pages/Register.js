import React, { useState, useForm } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineBook } from "react-icons/ai";
import classNames from "classnames";
import StudentRegForm from "../components/StudentRegForm";
import { FormProvider } from "react-advanced-form";
import TeacherRegForm from "../components/TeacherRegForm";

function Register() {
  const [visibleForm, setVisibleForm] = useState("Student");
  const branches = [
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
  ];
  const renderedBranches = branches.map((b) => {
    return <option>{b}</option>;
  });
  const batches = ["EE-A", "EE-B", "CO-A", "CO-B", "AE-A", "AE-B"];
  const renderedBatches = batches.map((b) => {
    return <option>{b}</option>;
  });
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

  let studentForm = <StudentRegForm></StudentRegForm>;
  let teacherForm;
  let content = studentForm;
  if (visibleForm === "Student") {
    content = studentForm;
  } else {
    content = teacherForm;
  }
  return (
    <div className="max-h-screen my-10 bg-black">
      <div className="w-full flex my-6">
        <div className="flex w-fit mx-auto gap-4">
          <div
            className={studentClasses}
            onClick={() => {
              if (visibleForm === "Teacher") {
                setVisibleForm("Student");
              } else {
                setVisibleForm("Teacher");
              }
            }}
          >
            <AiOutlineBook className="mx-auto text-3xl"></AiOutlineBook>
            <h3 className="font-semibold mt-2 text-lg mx-auto">Student</h3>
          </div>
          <div
            className={teacherClasses}
            onClick={() => {
              if (visibleForm === "Student") {
                setVisibleForm("Teacher");
              } else {
                setVisibleForm("Student");
              }
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
