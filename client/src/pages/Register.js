import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineBook } from "react-icons/ai";
import classNames from "classnames";

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
  const renderedBraches = branches.map((b) => {
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
      <div className="flex">
        <form className="grid grid-cols-2 w-1/2 h-full mx-auto gap-10">
          <Input label="First Name" type="text"></Input>
          <Input label="Last Name" type="text"></Input>
          <Input label="Date of Birth" type="date"></Input>
          <Input label="Roll Number" type="text"></Input>
          <div className="flex flex-col gap-2 w-full">
            <h3 className="font-semibold text-lg text-white">Branch</h3>
            <select className="cursor-pointer border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl">
              {renderedBraches}
            </select>
          </div>
          <Input label="Semester" type="number" min={1} max={8}></Input>
          <div className="col-span-2">
            <Button wide>Continue</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
