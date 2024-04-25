import propTypes from "prop-types";

const Button = ({ btnText, className }) => {
  return (
    <button
      className={`text-sm py-2 px-4 rounded ${
        className || "bg-gray-900 text-white"
      }`}
      type="submit"
    >
      {btnText}
    </button>
  );
};

export default Button;
Button.propTypes = {
  btnText: propTypes.string,
  className: propTypes.string,
};
