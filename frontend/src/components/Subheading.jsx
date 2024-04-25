import propTypes from "prop-types";

const Subheading = ({ subheading }) => {
  return <div className="text-sm text-gray-600 text-center">{subheading}</div>;
};

export default Subheading;
Subheading.propTypes = {
  subheading: propTypes.string,
};
