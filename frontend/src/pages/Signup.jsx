import { useState } from "react";
import {
  BottomWarning,
  Button,
  Heading,
  Input,
  Subheading,
} from "../components";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="mx-auto w-2/3 md:w-1/2 lg:w-1/3 my-8">
      <Heading text={"Sign Up"} key={"SignupHeading"} />
      <Subheading
        subheading={"Enter your information to create an account"}
        key={"SignupSubheading"}
      />
      <div className="flex flex-col gap-4 my-3">
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
          label={"Email"}
          key={"SignupMail"}
          placeholder={"johndoe@example.com"}
          type={"email"}
          value={email}
          setValue={setEmail}
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
      </div>
    </div>
  );
};

export default Signup;
