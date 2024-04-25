import { Link } from "react-router-dom";
import propTypes from "prop-types";

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
BottomWarning.propTypes = {
  warning: propTypes.string,
  to: propTypes.string,
  linkText: propTypes.string,
};
