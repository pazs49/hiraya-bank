import { useState } from "react";
import TEMP_USERS from "../TEMP_USERS";

const useUsers = () => {
  const [users, setUsers] = useState([...TEMP_USERS]);
  const addUser = (user) => {
    setUsers((prevUsers) => [...users, user]);
  };
  return { users, addUser };
};
export default useUsers;
