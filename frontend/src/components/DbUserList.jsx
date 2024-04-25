import propTypes from "prop-types";
import DbUser from "./DbUser";

const DbUserList = ({ userList }) => {
  return (
    <div>
      {userList.map((user, index) => (
        <DbUser dbUser={user} key={index} />
      ))}
    </div>
  );
};

export default DbUserList;
DbUserList.propTypes = {
  userList: propTypes.array,
};
