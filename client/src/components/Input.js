import React from "react";

function Input({ type, label, min, max }) {
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
        ></input>
      </div>
    </div>
  );
}

export default Input;
