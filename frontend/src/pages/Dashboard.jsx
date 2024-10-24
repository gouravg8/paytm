import { useState } from "react";
import { Input, Nav, DbUserList, Balance } from "../components/index.js";

const Dashboard = () => {
  const [user, setUser] = useState("Suar");
  const [dbUser, setDbUser] = useState("dbUser");
  const [balance, setBalance] = useState(0);
  return (
    <>
      <Nav />
      <div className="px-6">
        <Balance key={"dashboardBalance"} balance={balance} />
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
