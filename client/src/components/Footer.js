import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="text-white w-full bg-[#454545] p-10 flex justify-between">
      <div className="w-1/2 flex flex-col">
        <div className="font-semibold text-xl mx-auto">
          Contact the developers
        </div>
        <div className="flex justify-center mt-2">
          <h3 className="font-semibold text-lg">Ansh Goel</h3>
          <AiFillGithub className="my-auto ml-2 text-xl"></AiFillGithub>
          <AiOutlineLinkedin className="my-auto ml-2 text-2xl"></AiOutlineLinkedin>
        </div>
        <div className="flex justify-center">
          <h3 className="font-semibold text-lg">Ayush Gupta</h3>
          <AiFillGithub className="my-auto ml-2 text-xl"></AiFillGithub>
          <AiOutlineLinkedin className="my-auto ml-2 text-2xl"></AiOutlineLinkedin>
        </div>
      </div>
      <div className="w-1/2 flex flex-col">
        <div className="font-semibold text-xl mx-auto">
          Check out the Github repo here
        </div>
        <div className="flex justify-center mt-2 hover:bg-black w-fit p-2 rounded-lg mx-auto cursor-pointer duration-500">
          <div className="rounded-lg w-fit bg-white">
            <AiFillGithub className="text-black text-3xl"></AiFillGithub>
          </div>
          <div className="my-auto ml-2 font-semibold">ClassCash</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
