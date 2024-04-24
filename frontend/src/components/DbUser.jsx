import React from "react";
import propTypes from "prop-types";
import Button from "./Button";

const DbUser = ({ dbUser }) => {
  return (
    <div className="flex justify-between my-1">
      <div className="flex gap-3 ">
        <p className="bg-gray-300 rounded-full px-2 py-0 size-fit  font-semibold text-center">
          {dbUser.charAt(0).toUpperCase()}
        </p>
        <p className="font-semibold">{dbUser}</p>
      </div>
      <Button btnText={"Send Money"} key={"dbuserbutton"} />
    </div>
  );
};

export default DbUser;
DbUser.propTypes = {
  dbUser: propTypes.string,
};
