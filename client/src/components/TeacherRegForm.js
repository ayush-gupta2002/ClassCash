import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";

function TeacherRegForm({ foundBatches }) {
  let info = {};
  let credInfo = {};
  let batchesInfo = [];
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
  const renderedBatches = foundBatches.map((b) => {
    return <option>{b.name}</option>;
  });
  const handleSubmit = async (e) => {
    for (let i = 0; i < 3; i++) {
      const field = e.target[i].name;
      const value = e.target[i].value;
      info[field] = value;
    }
    for (let i = 3; i < 8; i++) {
      batchesInfo.push(e.target[i].value);
    }
    for (let i = 8; i < 10; i++) {
      const field = e.target[i].name;
      const value = e.target[i].value;
      credInfo[field] = value;
    }
    try {
      const res = await axios.post("http://localhost:3000/teachers", {
        info: info,
        batchesInfo: batchesInfo,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
    try {
      const res = await axios.post("http://localhost:3000/register", credInfo);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      noValidate
      className="grid grid-cols-2 w-1/2 h-full mx-auto gap-10"
    >
      <Input label="First Name" type="text" name="firstName"></Input>
      <Input label="Last Name" type="text" name="lastName"></Input>
      <div className="flex flex-col gap-2 w-full">
        <h3 className="font-semibold text-lg text-white">Branch</h3>
        <select
          name="branch"
          className="cursor-pointer border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl"
        >
          {renderedBranches}
        </select>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h3 className="font-semibold text-lg text-white">Batches</h3>
        <select
          name="batch1"
          className="cursor-pointer border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl"
        >
          {renderedBatches}
        </select>
        <select
          name="batch2"
          className="cursor-pointer border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl"
        >
          {renderedBatches}
        </select>
        <select
          name="batch3"
          className="cursor-pointer border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl"
        >
          {renderedBatches}
        </select>
        <select
          name="batch4"
          className="cursor-pointer border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl"
        >
          {renderedBatches}
        </select>
        <select
          name="batch5"
          className="cursor-pointer border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl"
        >
          {renderedBatches}
        </select>
      </div>
      <Input label="Email" type="email" name="email"></Input>
      <Input label="Password" type="password" name="password"></Input>
      <div className="col-span-2">
        <Button wide>Continue</Button>
      </div>
    </form>
  );
}

export default TeacherRegForm;
