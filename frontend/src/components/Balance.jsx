import React from "react";
import propTypes from "prop-types";

const Balance = ({ balance }) => {
  return (
    <div>
      <h3 className="font-semibold my-2">Your balance is: {balance}</h3>
    </div>
  );
};

export default Balance;
Balance.propTypes = {
  balance: propTypes.number,
};
