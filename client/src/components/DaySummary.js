import React from "react";
import { BiCoinStack } from "react-icons/bi";
import className from "classnames";

function DaySummary({ date, cash }) {
  let coinClasses, cashClasses;

  coinClasses = className({
    "ml-1": true,
    "text-green-500": cash >= 0,
    "text-red-500": cash < 0,
    "my-auto": true,
  });

  cashClasses = className({
    "ml-2": true,
    "text-green-500": cash >= 0,
    "text-red-500": cash < 0,
  });

  return (
    <div className="flex mb-4 hover:underline text-gray-500 hover:text-black cursor-pointer hover:scale-105 duration-500">
      <h3 className="font-semibold text-lg">{date}</h3>
      <div className="flex my-auto">
        <h4 className={cashClasses}>{cash}</h4>
        <BiCoinStack className={coinClasses}></BiCoinStack>
      </div>
    </div>
  );
}

export default DaySummary;
