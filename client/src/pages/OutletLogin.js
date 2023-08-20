import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Footer from "../components/Footer";
import { outletLogin } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BrandHeader from "../components/BrandHeader";

function OutletLogin() {
  const navigate = useNavigate();
  const outlet = useSelector((state) => state.outlet);
  console.log("outlet", outlet);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const buttonClasses = classNames({
    "w-full": true,
    "text-black": true,
    "font-semibold": true,
    "p-2": true,
    "bg-black": name === "" || password === "",
    "bg-white": name !== "" && password !== "",
    "duration-500": true,
    "hover:scale-105": true,
    "duration-500": true,
  });

  const dispatch = useDispatch();

  let buttonDisabled;
  if (name === "" || password === "") {
    buttonDisabled = true;
  } else {
    buttonDisabled = false;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    outletLogin(dispatch, { name: name, password: password });
    if (outlet.currentOutlet) {
      navigate("/outletprofile");
    } else if (outlet.error && !outlet.isFetching) {
      setError("Please enter the correct credentials!");
    }
  };

  useEffect(() => {
    if (outlet.currentOutlet) {
      navigate("/outletprofile");
    } else if (outlet.error && !outlet.isFetching) {
      setError("Please enter the correct credentials!");
    }
  }, [outlet.currentOutlet]);

  let errorContent = <div></div>;
  if (error) {
    errorContent = (
      <h3 className="font-semibold text-white mx-auto mt-10 text-lg">
        {error}
      </h3>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <BrandHeader></BrandHeader>
      {errorContent}

      <div className="w-full md:w-1/2 flex h-full mx-auto">
        <form
          className="w-1/2 m-auto flex flex-col"
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <div className="flex flex-col my-6">
            <label
              className="text-gray-400 font-semibold text-2xl mb-2"
              htmlFor="name"
            >
              Outlet Name
            </label>
            <input
              className="border-2 bg-black p-2 focus:outline-none text-gray-300"
              id="name"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
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
          <Link
            to="/login"
            className="font-semibold text-white text-xl mx-auto mb-2 hover:underline cursor-pointer"
          >
            Are you a Student or a Teacher? Login here
          </Link>
          <Link
            to="/register"
            className="font-semibold text-white text-xl mx-auto mb-2 hover:underline cursor-pointer"
          >
            New Here? Register here
          </Link>
          <button disabled={buttonDisabled} className={buttonClasses}>
            Login
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default OutletLogin;
