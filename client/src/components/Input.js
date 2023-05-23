import React from "react";
import { useFormContext } from "react-hook-form";

function Input({ type, label, min, max }) {
  const { register } = useFormContext();
  let minVal, maxVal;
  if (min) {
    minVal = min;
  }
  if (max) {
    maxVal = max;
  }
  return (
    <div className="w-full flex">
      <div className="flex flex-col gap-2 w-full mx-auto">
        <h3 className="font-semibold text-lg text-white">{label}</h3>
        <input
          type={type}
          className="border-2 border-white bg-black focus:bg-white focus:outline-none focus:bg-white duration-500 font-semibold text-gray-500 p-2 text-xl"
          min={minVal}
          max={maxVal}
          {...register(label, {
            required: {
              value: true,
              message: "required",
            },
          })}
        ></input>
      </div>
    </div>
  );
}

const InputError = () => {
  return <div>error</div>;
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default Input;
