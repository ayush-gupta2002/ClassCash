import React from "react";
import BarGraph from "../components/BarGraph";
import Timetable from "../components/Timetable";

function Home() {
  return (
    <div className="h-fit min-h-screen my-10 bg-black">
      <div className="flex w-full">
        <div className="w-full flex mx-auto">
          <div className="mx-auto text-center w-2/3">
            <h1 className="text-white text-2xl font-semibold">
              Ayush's Timetable
            </h1>
            <Timetable></Timetable>
            <div className="flex gap-4 mt-12">
              <div className="w-1/2"></div>
              <div className="w-1/2">
                <BarGraph></BarGraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
