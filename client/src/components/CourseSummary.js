import React from "react";
import DaySummary from "./DaySummary";

function CourseSummary({ course }) {
  return (
    <div className="h-full min-w-[500px] bg-white rounded-lg p-4 overflow-scroll">
      <div className="flex w-full">
        <div className="mx-auto font-semibold text-xl text-gray-500">
          {course}
        </div>
      </div>
      <div className="flex w-full">
        <div className="mx-auto w-fit flex flex-col gap-2 mt-2">
          <DaySummary date="17-05-2023" cash={40}></DaySummary>
          <DaySummary date="16-05-2023" cash={-10}></DaySummary>
          <DaySummary date="15-05-2023" cash={20}></DaySummary>
          <DaySummary date="12-05-2023" cash={20}></DaySummary>
          <DaySummary date="11-05-2023" cash={0}></DaySummary>
          <DaySummary date="08-05-2023" cash={-10}></DaySummary>
          <DaySummary date="05-05-2023" cash={40}></DaySummary>
          <DaySummary date="01-05-2023" cash={40}></DaySummary>
          <div className="w-full flex justify-center">
            <h3 className="font-sembold hover:underline cursor-pointer">
              View More
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSummary;
