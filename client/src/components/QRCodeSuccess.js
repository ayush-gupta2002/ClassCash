import React from "react";
import { BiCoinStack } from "react-icons/bi";
import Button from "./Button";

function QRCodeSuccess() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col gap-4 mb-12 border-b-4 border-white pb-4">
        <h3 className="font-bold text-gray-200 text-4xl mx-auto">
          Nescafe Pvt. Ltd.
        </h3>
        <div className="font-bold text-gray-300 text-xl mx-auto">
          ID: 634ef789ui7
        </div>
      </div>

      <div className="flex mx-auto mb-4">
        <BiCoinStack className="text-4xl my-auto"></BiCoinStack>
        <input
          className="ml-4 text-2xl text-white p-2 focus:outline-none bg-black border-b-4"
          type="number"
          min={1}
          placeholder="Enter Amount"
        ></input>
      </div>
      <div className="flex gap-4 mx-auto my-4">
        <button className="rounded-lg p-4 text-white bg-teal-500 font-semibold hover:scale-105 duration-500">
          Pay Now
        </button>
        <button className="rounded-lg p-4 text-white bg-red-500 font-semibold  hover:scale-105 duration-500">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default QRCodeSuccess;
