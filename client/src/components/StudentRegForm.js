import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-advanced-form";
import Input from "./Input";
import Button from "./Button";

function StudentRegForm() {
  const methods = useForm();

  const handleSubmit = methods.handleSubmit((e) => {
    console.log(e);
  });
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
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-2 w-1/2 h-full mx-auto gap-10"
      >
        <Input label="First Name" type="text"></Input>
        <Input label="Last Name" type="text"></Input>
        <Input label="Date of Birth" type="date"></Input>
        <Input label="Roll Number" type="text"></Input>
        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-semibold text-lg text-white">Branch</h3>
          <select className="cursor-pointer border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl">
            {renderedBranches}
          </select>
        </div>
        <Input label="Semester" type="number" min={1} max={8}></Input>
        <div className="col-span-2">
          <Button wide>Continue</Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default StudentRegForm;
