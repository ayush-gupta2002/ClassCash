import React from "react";
import { BiCoinStack } from "react-icons/bi";

function TopPerformers() {
  const performers = [
    {
      name: "Ayush Gupta",
      roll_no: "2K21/EE/85",
      coins: 2300,
      img: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Gitansh Mehta",
      roll_no: "2K21/EE/113",
      coins: 2200,
      img: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Dhruv Bakshi",
      roll_no: "2K21/EE/110",
      coins: 1900,
      img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Govind",
      roll_no: "2K21/EE/100",
      coins: 1800,
      img: "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Hardik Kaushik",
      roll_no: "2K21/EE/101",
      coins: 1500,
      img: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const renderedPerformers = performers.map((p) => {
    return (
      <div className="hover:scale-105 duration-500 hover:bg-gray-200 cursor-pointer group p-2 rounded-xl">
        <img src={p.img} className="w-full h-[260px] rounded-lg"></img>
        <div className="justify-between w-full flex mt-2">
          <div className="text-white w-full text-left flex flex-col w-1/2">
            <div className="font-semibold text-gray-400 text-xl group-hover:text-black">
              {p.name}
            </div>
            <div className="font-heavy text-gray-400 text-lg group-hover:text-black">
              {p.roll_no}
            </div>
          </div>
          <div className="flex font-semibold w-1/2 justify-items-start">
            <div className="text-gray-200 my-auto group-hover:text-black">
              {p.coins}
            </div>
            <BiCoinStack className="text-gray-200 my-auto ml-1 group-hover:text-black"></BiCoinStack>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="grid grid-rows-1 grid-cols-5 gap-3">
      {renderedPerformers}
    </div>
  );
}

export default TopPerformers;
