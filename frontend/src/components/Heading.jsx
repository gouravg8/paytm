import React from "react";
import propTypes from "prop-types";

const Heading = ({ text, className }) => {
  return (
    <div className={`text-3xl mx-auto text-center font-bold my-3 ${className}`}>
      {text}
    </div>
  );
};

export default Heading;

Heading.propTypes = {
  text: propTypes.string,
  className: propTypes.string,
};
