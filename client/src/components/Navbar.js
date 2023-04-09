import React from "react";
import Button from "./Button";
import { BiCoinStack } from "react-icons/bi";

function Navbar() {
  return (
    <div className="w-full h-fit text-white flex justify-end py-2 px-2">
      <div className="w-1/2 flex justify-between">
        <div className="flex w-1/2 justify-items-start">
          <img
            className="w-12 h-12 rounded-full border-2 border-white my-auto"
            src="https://images.unsplash.com/photo-1518882570151-157128e78fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFtZXJpY2FuJTIwZ2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          ></img>
          <div className="flex gap-1 ml-2">
            <BiCoinStack className="my-auto text-lg"></BiCoinStack>
            <div className="font-semibold my-auto">2300</div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <Button rounded>Logout</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
