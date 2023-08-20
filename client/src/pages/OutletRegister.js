import { React } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import BrandHeader from "../components/BrandHeader";

function OutletRegister() {
  let info = {};
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    for (let i = 0; i < 4; i++) {
      const field = e.target[i].name;
      const value = e.target[i].value;
      info[field] = value;
    }

    try {
      const res = await axios.post("http://localhost:3000/outlets", info);
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-full w-full flex flex-col">
      <BrandHeader></BrandHeader>
      <form
        className="m-auto"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <h1 className="text-white font-bold text-4xl my-6">
          OUTLET REGISTRATION
        </h1>
        <div className="flex flex-col gap-4">
          <Input type="text" name="username" label="Outlet's Name"></Input>
          <Input type="text" name="owner" label="Owner's Full Name"></Input>
          <Input type="text" name="phone" label="Owner's Phone"></Input>
          <Input type="password" name="password" label="Password"></Input>
          <Link
            className="text-white mx-auto font-bold text-xl my-4 hover:underline cursor-pointer hover:scale-105 duration-500"
            to="/login"
          >
            Already have an account? Login here
          </Link>
          <Button>Register</Button>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
}

export default OutletRegister;
