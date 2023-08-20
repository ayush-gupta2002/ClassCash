import React, { useState, useEffect } from "react";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineBook } from "react-icons/ai";
import classNames from "classnames";
import StudentRegForm from "../components/StudentRegForm";
import TeacherRegForm from "../components/TeacherRegForm";
import axios from "axios";
import { Link } from "react-router-dom";
import BrandHeader from "../components/BrandHeader";
import Footer from "../components/Footer";

function Register() {
  const [visibleForm, setVisibleForm] = useState("Student");
  const [foundBatches, setFoundBatches] = useState([]);
  useEffect(() => {
    const getBatches = async () => {
      try {
        const res = await axios.get("http://localhost:3000/batches");
        setFoundBatches(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBatches();
  }, []);
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
  let content = <StudentRegForm foundBatches={foundBatches}></StudentRegForm>;
  if (visibleForm === "Student") {
    content = <StudentRegForm foundBatches={foundBatches}></StudentRegForm>;
  } else {
    content = <TeacherRegForm foundBatches={foundBatches}></TeacherRegForm>;
  }

  return (
    <div className="max-h-screen my-10 bg-black flex flex-col">
      <div className="w-fit mx-auto">
        <BrandHeader></BrandHeader>
      </div>
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
      <div className="w-full flex flex-col">
        <Link
          className="text-white mx-auto font-bold text-xl my-4 hover:underline cursor-pointer hover:scale-105 duration-500"
          to="/outletregister"
        >
          Are you an outlet? Register here.
        </Link>
        <Link
          className="text-white mx-auto font-bold text-xl my-4 hover:underline cursor-pointer hover:scale-105 duration-500"
          to="/login"
        >
          Already have an account? Login here
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Register;
