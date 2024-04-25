import propTypes from "prop-types";

const Input = ({ label, placeholder, value, setValue, type }) => {
  return (
    <div className=" flex flex-col gap-1">
      <label className="text font-semibold" htmlFor="input">
        {label}
      </label>
      <input
        className="placeholder:text-gray-400 text-sm border rounded px-2 py-1"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
Input.propTypes = {
  label: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  setValue: propTypes.func,
  type: propTypes.string,
};
