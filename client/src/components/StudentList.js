import React from "react";
import { BiCoinStack } from "react-icons/bi";

function StudentList({ students }) {
  const renderedStudents = students.map((stu) => {
    console.log(stu);
    return (
      <div className="bg-white rounded-lg p-4 flex flex-col gap-3">
        <div className="w-full justify-between flex">
          <div className="flex gap-2">
            <h3 className="text-2xl font-semibold text-gray-500">Name</h3>
            <h3 className="text-2xl font-semibold">
              {stu.firstName + " " + stu.lastName}
            </h3>
          </div>
          <div className="flex gap-2 items-center">
            <BiCoinStack size={30}></BiCoinStack>
            <h3 className="font-semibold text-2xl">{stu.coins}</h3>
          </div>
        </div>

        <div className="flex gap-2">
          <h3 className="text-2xl font-semibold text-gray-500">Roll Number</h3>
          <h3 className="text-2xl font-semibold">{stu.rollNo}</h3>
        </div>
      </div>
    );
  });
  return <div className="flex flex-col gap-4 px-12">{renderedStudents}</div>;
}

export default StudentList;
