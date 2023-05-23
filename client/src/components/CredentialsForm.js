import React from "react";
import Button from "./Button";
import Input from "./Input";

function CredentialsForm({ credInfo, setCredInfo, info }) {
  const newInfo = {};
  const handleSubmit = (e) => {
    for (let i = 0; i < 2; i++) {
      const field = e.target[i].name;
      const value = e.target[i].value;
      newInfo[field] = value;
    }
    setCredInfo(newInfo);
  };
  console.log(info);
  console.log({ ...info, ...credInfo });
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      className="w-1/2 mx-auto flex flex-col gap-6"
    >
      <Input label="Email Address" name="email" type="email"></Input>
      <Input label="Password" name="password" type="password"></Input>
      <Button>Sign up</Button>
    </form>
  );
}

export default CredentialsForm;
