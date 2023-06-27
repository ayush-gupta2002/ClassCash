import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StudentInAttendance from "../components/StudentInAttendance";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function compare(a, b) {
  if (a.firstName + a.lastName < b.firstName + b.lastName) {
    return -1;
  }
  if (a.firstName + a.lastName > b.firstName + b.lastName) {
    return 1;
  }
  return 0;
}

function AddAttendance() {
  const navigate = useNavigate();
  const [batch, setBatch] = useState({});
  const [absent, setAbsent] = useState([]);
  const [present, setPresent] = useState([]);
  const batchID = window.location.pathname.split("/")[2];
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([...absent, ...present]);
  const [date, setDate] = useState(null);
  const teacher = useSelector((state) => state.teacher);
  const user = useSelector((state) => state.currentUser);

  useEffect(() => {
    const getBatch = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/batches/${batchID}`);
        setBatch(res.data);
        setLoading(false);
        setAbsent(res.data.students);
        setStudents(res.data.students);
      } catch (err) {
        console.log(err);
      }
    };
    getBatch();
  }, []);

  useEffect(() => {
    setLoading(true);
    setStudents([...absent, ...present].sort(compare));
    setLoading(false);
  }, [present, absent]);

  const handleSubmit = async () => {
    let presentIds = present.map((s) => s._id);
    let absentIds = absent.map((s) => s._id);
    try {
      const res = await axios.post(
        "http://localhost:3000/teachers/attendance",
        {
          batch: batchID,
          present: presentIds,
          absent: absentIds,
          date: date,
          teacher: teacher,
        },
        { headers: { token: `Bearer ${user.accessToken}` } }
      );
      navigate("/teacherprofile");
    } catch (err) {
      console.log(err);
    }
  };

  const absentStudents = absent.map((ab, index) => {
    return (
      <h3 className="font-semibold text-lg" key={index}>
        {ab.firstName + " " + ab.lastName}
      </h3>
    );
  });

  const presentStudents = present.map((pr, index) => {
    return (
      <h3 className="font-semibold text-lg" key={index}>
        {pr.firstName + " " + pr.lastName}
      </h3>
    );
  });

  let renderedStudents = <div></div>;
  if (students) {
    renderedStudents = students.map((stu, index) => {
      return (
        <StudentInAttendance
          stu={stu}
          absent={absent}
          setAbsent={setAbsent}
          present={present}
          setPresent={setPresent}
          students={students}
          setStudents={setStudents}
          key={index}
        ></StudentInAttendance>
      );
    });
  }
  let content = <div className="m-auto spinner"></div>;

  if (!loading) {
    content = (
      <div className="flex w-full h-full flex-col">
        <h1 className="text-white font-semibold text-4xl w-full text-center py-2 border-b-2 border-white">
          {batch.name}
        </h1>
        <div className="flex w-1/2 justify-center my-4 mx-auto">
          <input
            type="date"
            className="px-4 py-2 cursor-pointer rounded-lg text-xl font-semibold text-gray-500 focus:outline-none"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
          <Button rounded handleClick={handleSubmit}>
            Submit
          </Button>
        </div>
        <div className="flex w-full h-full">
          <div className="w-1/4 border-r-2 border-white flex flex-col px-4">
            <div className="w-full h-1/2 rounded-lg bg-white overflow-scroll flex flex-col my-4 gap-2 text-center px-4">
              <h2 className="font-semibold text-gray-500 text-2xl border-b-2">
                Absent
              </h2>
              {absentStudents}
            </div>
            <div className="w-full h-1/2 rounded-lg bg-white overflow-scroll flex flex-col my-4 gap-2 text-center px-4">
              <h2 className="font-semibold text-gray-500 text-2xl border-b-2">
                Present
              </h2>
              {presentStudents}
            </div>
          </div>
          <div className="my-6 w-3/4 mx-auto flex flex-col gap-4 px-6">
            {renderedStudents}
          </div>
        </div>
      </div>
    );
  }

  return <div className="max-h-screen my-10 bg-black">{content}</div>;
}

export default AddAttendance;
