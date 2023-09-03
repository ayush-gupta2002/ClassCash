import React, { useEffect, useState } from "react";
import axios from "axios";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillEye, AiOutlinePlus } from "react-icons/ai";
import StudentList from "../components/StudentList";
import { Link } from "react-router-dom";

function Batch() {
  const [foundBatch, setFoundBatch] = useState({});
  const [selectedOption, setSelectedOption] = useState("Attendance");
  const [records, setRecords] = useState([]);
  const [students, setStudents] = useState([]);
  const batchID = window.location.pathname.split("/")[2];
  const user = useSelector((state) => state.user.currentUser);
  const teacher = useSelector((state) => state.user.teacher);
  useEffect(() => {
    const getBatch = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/batches/${batchID}`);
        setFoundBatch(res.data);
        setStudents(res.data.students);
      } catch (err) {
        console.log(err);
      }
    };
    getBatch();
  }, []);

  const data = { batch: batchID, teacher: teacher._id };

  useEffect(() => {
    const getAttendance = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/teachers/attendance/${batchID}/${teacher._id}`,
          data,
          { headers: { token: `Bearer ${user.accessToken}` } }
        );
        setRecords(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAttendance();
  }, []);

  const options = [
    { id: 1, label: "Attendance Records", value: "Attendance" },
    { id: 2, label: "Students", value: "Students" },
  ];

  const renderedOptions = options.map((opt) => {
    const optionClasses = classNames({
      "text-white": selectedOption === opt.value,
      "bg-gray-700": selectedOption === opt.value,
      "text-gray-400": selectedOption !== opt.value,
      "border-b-2": selectedOption === opt.value,
      "hover:bg-gray-700": true,
      "hover:text-white": true,
      "cursor-pointer": true,
      "p-2": true,
      "rounded-lg": true,
      "duration-300": true,
      "font-semibold": true,
      "text-3xl": true,
      "m-4": true,
    });
    return (
      <h2
        className={optionClasses}
        key={opt.id}
        onClick={() => {
          setSelectedOption(opt.value);
        }}
      >
        {opt.label}
      </h2>
    );
  });

  const renderedRecords = records.map((rec) => {
    return (
      <div className="py-4 px-6 bg-white rounded-lg flex flex-col gap-4">
        <h1 className="mx-auto font-semibold text-xl border-b-2 border-black">
          {rec.date}
        </h1>
        <div className="flex gap-2">
          <h3 className="font-semibold text-xl text-gray-500">Present</h3>
          <h3 className="font-semibold text-xl text-black">
            {rec.present.length}
          </h3>
        </div>
        <div className="flex gap-2">
          <h3 className="font-semibold text-xl text-gray-500">Absent</h3>
          <h3 className="font-semibold text-xl text-black">
            {rec.absent.length}
          </h3>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200 duration-500 items-center">
            <BsFillPencilFill size={20}></BsFillPencilFill>
            <h3>Edit</h3>
          </div>
          <div className="flex gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200 duration-500 items-center">
            <AiFillEye size={20}></AiFillEye>
            <h3>View</h3>
          </div>
        </div>
      </div>
    );
  });

  console.log(records);

  let content;
  if (selectedOption == "Attendance") {
    content = (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-10 py-6">
        <Link to={`/addattendance/${batchID}`}>
          <div className="h-full bg-gray-900 flex w-full rounded-lg  group hover:bg-gray-300 duration-500 cursor-pointer">
            <AiOutlinePlus
              className="text-white m-auto group-hover:text-gray-700 duration-500"
              size={100}
            ></AiOutlinePlus>
          </div>
        </Link>
        {renderedRecords}
      </div>
    );
  } else {
    content = <StudentList students={students}></StudentList>;
  }

  return (
    <div className="min-h-screen h-full my-10 bg-black">
      <div className="flex flex-col w-full h-full">
        <h1 className="text-white font-semibold text-4xl w-full text-center py-2 border-b-2 border-white">
          {foundBatch.name}
        </h1>
        <div className="w-full justify-between flex my-2 px-4 items-center">
          <div className="flex gap-2">{renderedOptions}</div>
          <div className="flex gap-2">
            <h3 className="font-semibold text-2xl text-gray-400">
              Class Representative
            </h3>
            <h3 className="font-semibold text-2xl text-white"></h3>
          </div>
        </div>
        {content}
      </div>
    </div>
  );
}

export default Batch;
