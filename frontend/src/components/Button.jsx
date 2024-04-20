import React from "react";

const Button = ({ btnText }) => {
  return (
    <button
      className="bg-gray-900 text-white text-sm py-2 rounded"
      type="submit"
    >
      {btnText}
    </button>
  );
};

export default Button;
