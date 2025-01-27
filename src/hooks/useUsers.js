import { useState } from "react";
import TEMP_USERS from "../TEMP_USERS";

const useUsers = () => {
  const [users, setUsers] = useState([...TEMP_USERS]);
  const addUser = (user) => {
    setUsers((prevUsers) => [...users, user]);
  };

  const updateUser = (id, user) => {
    setUsers((prevUsers) =>
      prevUsers.map((mUser) =>
        mUser.id === id ? { ...mUser, ...user } : mUser
      )
    );
  };

  return { users, updateUser, addUser };
};
export default useUsers;
