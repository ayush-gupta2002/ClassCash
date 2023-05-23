import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";

function StudentRegForm() {
  let info = {};
  let credInfo = {};

  const handleSubmit = async (e) => {
    for (let i = 0; i < 6; i++) {
      const field = e.target[i].name;
      const value = e.target[i].value;
      info[field] = value;
    }
    for (let i = 6; i < 8; i++) {
      const field = e.target[i].name;
      const value = e.target[i].value;
      credInfo[field] = value;
    }
    try {
      const res = await axios.post("http://localhost:3000/students", info);
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
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      className="grid grid-cols-2 w-1/2 h-full mx-auto gap-10"
    >
      <Input label="First Name" type="text" name="firstName"></Input>
      <Input label="Last Name" type="text" name="lastName"></Input>
      <Input label="Date of Birth" type="date" name="dob"></Input>
      <Input label="Roll Number" type="text" name="rollNo"></Input>
      <div className="flex flex-col gap-2 w-full">
        <h3 className="font-semibold text-lg text-white">Branch</h3>
        <select
          className="cursor-pointer border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl"
          name="branch"
        >
          {renderedBranches}
        </select>
      </div>
      <Input
        label="Semester"
        type="number"
        min={1}
        max={8}
        name="semester"
      ></Input>
      <Input label="Email" type="email" name="email"></Input>
      <Input label="Password" type="password" name="password"></Input>
      <div className="col-span-2">
        <Button wide>Continue</Button>
      </div>
    </form>
  );
}

export default StudentRegForm;
