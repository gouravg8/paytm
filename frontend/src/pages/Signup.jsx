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

const Signup = () => {
  let domain = "http://localhost:3000/api/v1/user";
  const [firstName, setFirstName] = useState("john");
  const [lastName, setLastName] = useState("doe");
  const [username, setUsername] = useState(firstName + Math.floor(Math.random() * 100));
  const [password, setPassword] = useState("john123");

  const submitSignup = async (e) => {
    e.preventDefault();
    let signupPost = await axios.post(domain + "/signup", {
      username,
      password,
      firstName,
      lastName,
    });
    console.log(domain + "/signup");
    console.log(signupPost);
  };

  return (
    <>
      <Nav />
      <div className="mx-auto w-2/3 md:w-1/2 lg:w-1/3 my-8">
        <Heading text={"Sign Up"} key={"SignupHeading"} />
        <Subheading
          subheading={"Enter your information to create an account"}
          key={"SignupSubheading"}
        />
        <form
          method="post"
          onSubmit={submitSignup}
          className="flex flex-col gap-4 my-3"
        >
          <Input
            label={"First Name"}
            key={"SignupInput"}
            placeholder={"John"}
            type={"text"}
            value={firstName}
            setValue={setFirstName}
          />
          <Input
            label={"Last Name"}
            key={"SignupLastname"}
            placeholder={"Doe"}
            type={"text"}
            value={lastName}
            setValue={setLastName}
          />
          <Input
            label={"Username"}
            key={"SignupUsername"}
            placeholder={"johndoe"}
            type={"text"}
            value={username}
            setValue={setUsername}
          />
          <Input
            label={"Password"}
            placeholder={""}
            key={"SignupPass"}
            type={"password"}
            value={password}
            setValue={setPassword}
          />
          <Button btnText={"Sign Up"} key={"SignupButton"} />
          <BottomWarning
            warning={"Already have an account"}
            to={"/signin"}
            linkText={"Login"}
            key={"SignupBottomWarning"}
          />
        </form>
      </div>
    </>
  );
};

export default Signup;
