import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Timetable from "../components/Timetable";

function Home() {
  return (
    <div className="h-fit min-h-screen bg-black">
      <div className="flex w-full">
        <div className="w-2/3 flex mx-auto">
          <div className="mx-auto">
            <Timetable></Timetable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
