import { useState } from "react";
import {
  BottomWarning,
  Button,
  Heading,
  Input,
  Nav,
  Subheading,
} from "../components";
import axios from "axios";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let domain = "http://localhost:3000/api/v1/user";

  const handleSubmitSignin = async (e) => {
    e.preventDefault();
    let signinRes = await axios.post(
      domain + "/signin",
      {
        username,
        password,
      },
    );
    console.log(signinRes);
  };
  return (
    <>
      <Nav />
      <div className="mx-auto w-2/3 md:w-1/2 lg:w-1/3 my-8">
        <Heading text={"Sign In"} key={"signinheading"} />
        <Subheading subheading={"Enter your credential to access your accont"} />
        <form
          method="post"
          onSubmit={handleSubmitSignin}
          className="flex flex-col gap-4 my-3"
        >
          <Input
            label={"Username"}
            placeholder={"Johndoe"}
            value={username}
            setValue={setUsername}
            type={"text"}
            key={"signinusername"}
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
        </form>
      </div>
    </>
  );
};

export default Signin;
