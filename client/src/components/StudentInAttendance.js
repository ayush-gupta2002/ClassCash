import React, { useState } from "react";
import classNames from "classnames";

function StudentInAttendance({ stu, absent, setAbsent, present, setPresent }) {
  const [isAbsent, setIsAbsent] = useState(true);
  const [isPresent, setIsPresent] = useState(false);

  const handlePresent = () => {
    const index = absent.indexOf(stu);

    if (index !== -1) {
      const newAbsent = absent;
      newAbsent.splice(index, 1);
      setAbsent(newAbsent);
    }

    if (present.indexOf(stu) === -1) {
      const newPresent = [...present, stu];
      setPresent(newPresent);
    }
  };

  const handleAbsent = () => {
    const index = present.indexOf(stu);

    if (index !== -1) {
      const newPresent = present;
      newPresent.splice(index, 1);
      setPresent(newPresent);
    }

    if (absent.indexOf(stu) === -1) {
      const newAbsent = absent;
      newAbsent.push(stu);
      setAbsent(newAbsent);
    }
  };

  const presentClasses = classNames({
    "p-2": true,
    "rounded-lg": true,
    "bg-green-300": !isPresent,
    "text-white": true,
    "rounded-lg": true,
    "font-semibold": true,
    "text-lg": true,
    "hover:bg-green-700": true,
    "duration-500": true,
    "bg-green-700": isPresent,
  });

  const absentClasses = classNames({
    "p-2": true,
    "rounded-lg": true,
    "bg-red-300": !isAbsent,
    "text-white": true,
    "rounded-lg": true,
    "font-semibold": true,
    "text-lg": true,
    "hover:bg-red-700": true,
    "duration-500": true,
    "bg-red-700": isAbsent,
  });
  return (
    <div className="p-4 w-full bg-white rounded-lg justify-between flex">
      <div className="flex flex-col">
        <h1 className="font-semibold text-3xl">
          {stu.firstName + " " + stu.lastName}
        </h1>
        <h3 className="font-semibold text-2xl text-gray-500">{stu.rollNo}</h3>
      </div>
      <div className="flex gap-2">
        <button
          className={presentClasses}
          onClick={() => {
            setIsPresent(true);
            setIsAbsent(false);
            handlePresent();
          }}
        >
          Present
        </button>
        <button
          className={absentClasses}
          onClick={() => {
            setIsAbsent(true);
            setIsPresent(false);
            handleAbsent();
          }}
        >
          Absent
        </button>
      </div>
    </div>
  );
}

export default StudentInAttendance;
