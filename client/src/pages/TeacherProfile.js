import React from "react";
import FieldValue from "../components/FieldValue";
import { useSelector } from "react-redux";
import Batch from "../components/Batch";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function TeacherProfile() {
  const teacher = useSelector((state) => state.teacher);
  const renderedBatches = teacher.batches.map((batch) => {
    return (
      <Link to={`/batch/${batch}`}>
        <Batch batchID={batch}></Batch>
      </Link>
    );
  });
  return (
    <div>
      <Navbar></Navbar>

      <div className="max-h-screen my-10 bg-black">
        <div className="flex w-full h-full">
          <div className="w-1/4 px-6 border-r-2 mr-4">
            <div className="w-full justify-end flex mb-4">
              <div className="flex text-white gap-3 items-center font-semibold text-xl p-2 cursor-pointer rounded-lg cursor-ponter hover:bg-gray-700">
                <BsPencilFill></BsPencilFill>
                <h3>Edit</h3>
              </div>
            </div>
            <img
              className="w-full rounded-lg h-1/2 border-2 border-white"
              src="https://images.unsplash.com/photo-1518882570151-157128e78fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFtZXJpY2FuJTIwZ2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            ></img>
            <FieldValue
              field="First Name"
              value={teacher.firstName}
            ></FieldValue>
            <FieldValue field="Last Name" value={teacher.lastName}></FieldValue>
            <FieldValue field="Email" value={teacher.email}></FieldValue>
            <FieldValue field="Department" value={teacher.branch}></FieldValue>
          </div>
          <div className="w-3/4 flex flex-col gap-4">
            <h1 className="my-2 font-semibold text-white text-3xl">
              Your Batches
            </h1>
            <div className="flex w-full gap-5 h-1/2 overflow-x-scroll py-6 px-4">
              {renderedBatches}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;
