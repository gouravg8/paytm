import React from "react";
import { Nav, SendMoneyModal } from "../components";

const Send = () => {
  return (
    <div>
      <Nav user={"Suar"} />
      <SendMoneyModal key={"d"} dbUser={"Suar"} />
    </div>
  );
};

export default Send;
