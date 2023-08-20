import React from "react";
import { BiCoinStack } from "react-icons/bi";

function OutletTransaction({ name, date, amount, image }) {
  return (
    <div className="bg-gray-400 rounded-lg p-4 flex">
      <img className="rounded-full w-10 h-10 my-auto" src={image}></img>
      <div className="justify-between mx-4 flex w-full">
        <div className="flex flex-col">
          <h3 className="font-semibold my-auto text-xl">{name}</h3>
          <h3 className="font-semibold text-xl text-gray-500">{date}</h3>
        </div>
        <div className="flex my-auto">
          <BiCoinStack className="text-xl my-auto mr-2"></BiCoinStack>
          <h3 className="font-semibold text-xl my-auto">{amount}</h3>
        </div>
      </div>
    </div>
  );
}

export default OutletTransaction;
