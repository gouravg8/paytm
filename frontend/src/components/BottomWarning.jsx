import React from "react";
import { Link } from "react-router-dom";

const BottomWarning = ({ warning, to, linkText }) => {
  return (
    <div className="text-sm text-center">
      {warning}{" "}
      <Link className="font-semibold" to={to}>
        {linkText}
      </Link>
    </div>
  );
};

export default BottomWarning;
