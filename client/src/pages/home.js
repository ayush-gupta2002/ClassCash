import React from "react";
import BarGraph from "../components/BarGraph";
import Navbar from "../components/Navbar";
import Timetable from "../components/Timetable";
import TopPerformers from "../components/TopPerformers";
import WeeklyStatement from "../components/WeeklyStatement";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-fit min-h-screen my-10 bg-black">
        <div className="flex w-full">
          <div className="w-full flex mx-auto">
            <div className="mx-auto text-center w-2/3">
              <h1 className="text-white text-2xl font-semibold">
                Ayush's Timetable
              </h1>
              <Timetable></Timetable>
              <div className="flex gap-4 mt-12">
                <div className="w-1/2 my-auto">
                  <WeeklyStatement></WeeklyStatement>
                </div>
                <div className="w-1/2">
                  <div className="flex w-full">
                    <div className="flex gap-4 mx-auto mb-4">
                      <h3 className="text-white p-2 hover:bg-gray-800 rounded-xl text-gray-400 duration-500 hover:text-white cursor-pointer">
                        Your Batch
                      </h3>
                      <h3 className="text-white p-2 hover:bg-gray-800 rounded-xl text-gray-400 duration hover:text-white cursor-pointer">
                        Batch Leaderboard
                      </h3>
                    </div>
                  </div>

                  <BarGraph></BarGraph>
                </div>
              </div>
              <h3 className="text-white font-semibold text-xl mb-4 mt-16">
                Top Performers in EE-B
              </h3>
              <TopPerformers></TopPerformers>
              <h3 className="text-white font-semibold text-xl mb-4 mt-16">
                Top Performers in Delhi Technological University
              </h3>
              <TopPerformers></TopPerformers>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
