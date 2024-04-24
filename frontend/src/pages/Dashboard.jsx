import React, { useState } from "react";
import Nav from "../components/Nav";
import { Input } from "../components/index";
import DbUserList from "../components/DbUserList";

const Dashboard = () => {
  const [user, setUser] = useState("Suar");
  const [dbUser, setDbUser] = useState("dbUser");
  const [balance, setBalance] = useState(0);
  return (
    <>
      <Nav user={user} />
      <div className="px-6">
        <h3 className="font-semibold my-2">Your balance is: {balance}</h3>
        <Input
          label={"Users"}
          placeholder={"Search user"}
          type={"text"}
          key={"dashboardUser"}
          value={dbUser}
          setValue={setDbUser}
        />
        <div className="my-5">
          <DbUserList userList={["suresh", "ramesh", "mahesh"]} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
