import axios from "axios";
import React, { useState, useEffect } from "react";
import StudentInAttendance from "../components/StudentInAttendance";

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
  const [batch, setBatch] = useState({});
  const [absent, setAbsent] = useState([]);
  const [present, setPresent] = useState([]);
  const batchID = window.location.pathname.split("/")[2];
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([...absent, ...present]);
  const [presentCnt, setPresentCnt] = useState(present.length);
  const [absentCnt, setAbsentCnt] = useState(absent.length);

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

  console.log(absent, present);

  let renderedStudents = <div></div>;
  if (students) {
    renderedStudents = students.map((stu) => {
      return (
        <StudentInAttendance
          stu={stu}
          absent={absent}
          setAbsent={setAbsent}
          present={present}
          setPresent={setPresent}
          students={students}
          setStudents={setStudents}
          setPresentCnt={setPresentCnt}
          setAbsentCnt={setAbsentCnt}
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
        <div className="flex gap-4 mx-auto mt-4">
          <div className="flex gap-2">
            <h3 className="font-semibold text-gray-500 text-2xl">Present</h3>
            <h3 className="font-semibold text-gray-500 text-2xl text-white">
              {presentCnt}
            </h3>
          </div>
          <div className="flex gap-2">
            <h3 className="font-semibold text-gray-500 text-2xl">Absent</h3>
            <h3 className="font-semibold text-gray-500 text-2xl text-white">
              {absentCnt}
            </h3>
          </div>
        </div>
        <div className="my-6 w-3/4 mx-auto flex flex-col gap-4">
          {renderedStudents}
        </div>
      </div>
    );
  }

  return <div className="max-h-screen my-10 bg-black">{content}</div>;
}

export default AddAttendance;
