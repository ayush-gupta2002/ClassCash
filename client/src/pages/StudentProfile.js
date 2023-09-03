import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import FieldValue from "../components/FieldValue";
import CourseSummary from "../components/CourseSummary";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function StudentProfile() {
  const student = useSelector((state) => state.user.student);
  const renderedCourseSummary = student.courses.map((course) => {
    return <CourseSummary course={course}></CourseSummary>;
  });
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-h-screen my-10 bg-black">
        <div className="flex w-full h-full">
          <div className="w-1/4 px-6">
            <img
              className="w-full rounded-lg h-1/2 border-2 border-white"
              src="https://images.unsplash.com/photo-1518882570151-157128e78fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFtZXJpY2FuJTIwZ2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            ></img>
            <div className="w-full flex gap-4">
              <div className="mx-auto p-4 flex gap-4">
                <AiOutlineInstagram className="text-white text-3xl"></AiOutlineInstagram>
                <FiLinkedin className="text-white text-3xl text-white"></FiLinkedin>
                <AiFillGithub className="text-white text-3xl text-white"></AiFillGithub>
              </div>
            </div>
            <FieldValue
              field="First Name"
              value={student.firstName}
            ></FieldValue>
            <FieldValue field="Last Name" value={student.lastName}></FieldValue>
            <FieldValue
              field="Email"
              value="ayush.gupta2002@gmail.com"
            ></FieldValue>
            <FieldValue field="Date of Birth" value={student.dob}></FieldValue>
            <FieldValue field="Roll Number" value={student.rollNo}></FieldValue>
            <FieldValue field="Branch" value={student.branch}></FieldValue>
            <FieldValue field="Semester" value={student.semester}></FieldValue>
          </div>
          <div className="w-3/4 flex flex-col gap-4">
            <div className="flex w-full gap-2 h-1/2 overflow-x-scroll">
              {renderedCourseSummary}
            </div>
            <div className="h-1/3 w-3/4 overflow-x-scroll flex gap-4">
              <img
                className="w-1/3"
                src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
              ></img>
              <div className="h-fit flex flex-col my-auto gap-2">
                <Button rounded>
                  <Link to="/qrcodescanning" className="w-full h-full">
                    Pay
                  </Link>
                </Button>
                <Button rounded>All Transactions</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
