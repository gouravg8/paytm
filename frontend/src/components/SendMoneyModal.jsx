import { useState } from "react";
import { Button, Heading, Input } from "./index";
import DbUser from "./DbUser";
import propTypes from "prop-types";

const SendMoneyModal = ({ dbUser }) => {
  const [amountSend, setAmountSend] = useState(0);
  return (
    <div className="w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
      <Heading text={"Send Money"} />
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 align-middle items-center">
          <p className="bg-gray-300 rounded-full px-1.5 py-0 size-fit text-sm font-semibold text-center">
            {dbUser.charAt(0).toUpperCase()}
          </p>
          <p className="font-semibold">
            {dbUser.charAt(0).toUpperCase() + dbUser.slice(1)}
          </p>
        </div>
        <Input
          label={"Amount (in Rs)"}
          placeholder={"Enter amount"}
          type={"number"}
          key={"modal"}
          value={amountSend}
          setValue={setAmountSend}
        />

        <Button
          btnText={"Initiate transfer"}
          className={"bg-green-600 text-white"}
        />
      </div>
    </div>
  );
};

export default SendMoneyModal;
SendMoneyModal.propTypes = {
  dbUser: propTypes.string,
};
