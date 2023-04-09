import React from "react";
import DaySummary from "./DaySummary";

function WeeklyStatement() {
  return (
    <div className="w-full p-4 rounded-xl bg-white">
      <div className="flex w-full">
        <div className="mx-auto">
          <h3 className="font-semibold text-xl mb-4">Weekly Statement</h3>
          <div className="grid grid cols-2 grid-rows-3">
            <DaySummary date="10/04/2023 Monday" cash={20}></DaySummary>
            <DaySummary date="11/04/2023 Tuesday" cash={-10}></DaySummary>
            <DaySummary date="12/04/2023 Wednesday" cash={30}></DaySummary>
            <DaySummary date="12/04/2023 Thursday" cash={-20}></DaySummary>
            <DaySummary date="12/04/2023 Friday" cash={60}></DaySummary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyStatement;
