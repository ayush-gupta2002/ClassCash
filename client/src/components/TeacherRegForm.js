import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-advanced-form";
import Input from "./Input";
import Button from "./Button";

function TeacherRegForm() {
  const methods = useForm();
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
  const batches = ["EE-A", "EE-B", "CO-A", "CO-B", "AE-A", "AE-B"];
  const renderedBatches = batches.map((b) => {
    return <option>{b}</option>;
  });
  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-2 w-1/2 h-full mx-auto gap-10">
        <Input label="First Name" type="text"></Input>
        <Input label="Last Name" type="text"></Input>
        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-semibold text-lg text-white">Branch</h3>
          <select className="cursor-pointer border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl">
            {renderedBranches}
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-semibold text-lg text-white">Batches</h3>
          <select className="cursor-pointer border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl">
            {renderedBatches}
          </select>
          <select className="cursor-pointer border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl">
            {renderedBatches}
          </select>
          <select className="cursor-pointer border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl">
            {renderedBatches}
          </select>
        </div>
        <div className="col-span-2">
          <Button wide>Continue</Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default TeacherRegForm;
