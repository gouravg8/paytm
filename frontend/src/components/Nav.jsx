import propTypes from "prop-types";

const Nav = () => {
  const redirectTo = (path) => {
    window.location.href = path;
  }

  return (
    <div className="flex justify-between px-4 py-2">
      <h2 className="font-semibold text-xl">Payments App</h2>
      <div className="flex gap-5">
        <button onClick={() => redirectTo("signup")}>Signup</button>
        <button onClick={() => redirectTo("login")}>Login</button>
        <button onClick={() => redirectTo("dashboard")}>Dashboard</button>

        {/* <p>Hello, {user.charAt(0).toUpperCase() + user.slice(1)}</p>
        <p className="bg-gray-300 rounded-full px-2 py-0 size-fit  font-semibold text-center">
          {user.charAt(0).toUpperCase()}
        </p> */}
      </div>
    </div>
  );
};

export default Nav;
Nav.propTypes = {
  user: propTypes.string,
};
