import React, { useState } from "react";
import {
  BottomWarning,
  Button,
  Heading,
  Input,
  Subheading,
} from "../components";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="mx-auto w-2/3 md:w-1/2 lg:w-1/3 my-8">
      <Heading text={"Sign In"} key={"signinheading"} />
      <Subheading subheading={"Enter your credential to access your accont"} />
      <div className="flex flex-col gap-4 my-3">
        <Input
          label={"Email"}
          placeholder={"johnduo@example.com"}
          value={email}
          setValue={setEmail}
          type={"email"}
          key={"signinmail"}
        />
        <Input
          label={"Password"}
          placeholder={""}
          value={password}
          setValue={setPassword}
          type={"password"}
          key={"signinpassword"}
        />
        <Button btnText={"Sign In"} key={"signinbutton"} />
        <BottomWarning
          warning={"Don't have account"}
          linkText={"Sign up"}
          to={"/signup"}
          key={"signinwarning"}
        />
      </div>
    </div>
  );
};

export default Signin;
