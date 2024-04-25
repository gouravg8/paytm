import propTypes from "prop-types";
import Button from "./Button";

const DbUser = ({ dbUser }) => {
  return (
    <div className="flex align-middle items-center justify-between my-1">
      <div className="flex gap-3 align-middle items-center">
        <p className="bg-gray-300 rounded-full px-1.5 py-0 size-fit text-sm font-semibold text-center">
          {dbUser.charAt(0).toUpperCase()}
        </p>
        <p className="font-semibold">
          {dbUser.charAt(0).toUpperCase() + dbUser.slice(1)}
        </p>
      </div>
      <Button className={""} btnText={"Send Money"} key={"dbuserbutton"} />
    </div>
  );
};

export default DbUser;
DbUser.propTypes = {
  dbUser: propTypes.string,
};
