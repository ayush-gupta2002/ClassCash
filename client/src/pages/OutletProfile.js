import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { BsPencilFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import OutletTransaction from "../components/OutletTransaction";
import Footer from "../components/Footer";

function OutletProfile() {
  const transactions = [
    {
      name: "Ayush Gupta",
      date: "20-08-2023",
      amount: 200,
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Ashutosh Goyal",
      date: "18-08-2023",
      amount: 900,
      image:
        "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Gitansh Mehta",
      date: "10-08-2023",
      amount: 500,
      image:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Ayush Gupta",
      date: "20-08-2023",
      amount: 200,
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Ashutosh Goyal",
      date: "18-08-2023",
      amount: 900,
      image:
        "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Gitansh Mehta",
      date: "10-08-2023",
      amount: 500,
      image:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const renderedTransactions = transactions.map((t) => {
    return (
      <OutletTransaction
        name={t.name}
        date={t.date}
        amount={t.amount}
        image={t.image}
      ></OutletTransaction>
    );
  });
  const outlet = useSelector((state) => state.outlet.currentOutlet);
  console.log(outlet);
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col h-full w-full">
        <h1 className="text-white mx-auto my-10 text-4xl font-bold text-gray-500">
          {outlet.username}
        </h1>
        <div className="flex h-screen">
          <div className="flex flex-col w-1/3 group cursor-pointer border-r-2 h-screen">
            <h2 className="mx-auto font-bold text-gray-500 text-4xl mb-4">
              My Profile
            </h2>
            <img
              className="rounded-lg h-1/2 border-2 border-white mx-6 group-hover:scale-105 duration-500"
              src="https://images.unsplash.com/photo-1456078003870-929d5986f0f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            ></img>
            <button className="flex bg-gray-500 mx-auto p-4 my-4 rounded-lg font-semibold text-white duration-500 group-hover:bg-gray-300 group-hover:text-black">
              <BsPencilFill className="my-auto mr-2"></BsPencilFill>
              Edit
            </button>
            <div className="flex flex-col">
              <div className="flex mx-auto gap-4">
                <h3 className="text-white font-bold text-lg">Username</h3>
                <h3 className="text-gray-400 font-semibold text-lg">
                  {outlet.username}
                </h3>
              </div>
              <div className="flex mx-auto gap-4">
                <h3 className="text-white font-bold text-lg">Owner</h3>
                <h3 className="text-gray-400 font-semibold text-lg">
                  {outlet.owner}
                </h3>
              </div>
              <div className="flex mx-auto gap-4">
                <h3 className="text-white font-bold text-lg">Phone</h3>
                <h3 className="text-gray-400 font-semibold text-lg">
                  {outlet.phone}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/3 group cursor-pointer border-r-2 h-screen">
            <h2 className="mx-auto font-bold text-gray-500 text-4xl mb-4">
              QR Code
            </h2>
            <img
              className="rounded-lg h-1/2 border-2 border-white mx-6 group-hover:scale-105 duration-500"
              src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${outlet._id}`}
            ></img>
            <a
              href={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${outlet._id}`}
              className="flex bg-gray-500 mx-auto p-4 my-4 rounded-lg font-semibold text-white duration-500 group-hover:bg-gray-300 group-hover:text-black"
            >
              <AiOutlineDownload className="my-auto mr-2"></AiOutlineDownload>
              Download
            </a>
          </div>
          <div className="flex flex-col w-1/3 h-screen">
            <h2 className="mx-auto font-bold text-gray-500 text-4xl mb-4">
              Transactions
            </h2>
            <div className="w-full h-full bg-gray-800 rounded-lg flex flex-col gap-4 p-4">
              <button className="p-4 rounded-lg bg-gray-300 duration-500 hover:scale-105 w-fit mx-auto font-semibold">
                View All
              </button>
              {renderedTransactions}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default OutletProfile;
