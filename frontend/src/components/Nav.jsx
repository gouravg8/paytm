import propTypes from "prop-types";

const Nav = ({ user }) => {
  return (
    <div className="flex justify-between px-4 py-2">
      <h2 className="font-semibold text-xl">Payments App</h2>
      <div className="flex gap-3">
        <p>Hello, {user.charAt(0).toUpperCase() + user.slice(1)}</p>
        <p className="bg-gray-300 rounded-full px-2 py-0 size-fit  font-semibold text-center">
          {user.charAt(0).toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default Nav;
Nav.propTypes = {
  user: propTypes.string,
};
