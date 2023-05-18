import React, { useState } from "react";
import classNames from "classnames";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const buttonClasses = classNames({
    "w-full": true,
    "text-black": true,
    "font-semibold": true,
    "p-2": true,
    "bg-black": email === "" || password === "",
    "bg-white": email !== "" && password !== "",
    "duration-500": true,
    "hover:scale-105": true,
    "duration-500": true,
  });

  console.log(email);
  console.log(password);

  let buttonDisabled;
  if (email === "" || password === "") {
    buttonDisabled = true;
  } else {
    buttonDisabled = false;
  }

  return (
    <div className="m-auto w-1/2 flex">
      <form className="w-1/2 mx-auto">
        <div className="flex flex-col my-6">
          <label
            className="text-gray-400 font-semibold text-2xl mb-2"
            htmlFor="email"
          >
            Email ID
          </label>
          <input
            className="border-2 bg-black p-2 focus:outline-none text-gray-300"
            id="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="flex flex-col my-6">
          <label
            className="text-gray-400 font-semibold text-2xl mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border-2 bg-black p-2 focus:outline-none text-gray-300"
            id="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button disabled={buttonDisabled} className={buttonClasses}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
