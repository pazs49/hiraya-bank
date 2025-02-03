import { useEffect, useState } from "react";
import TEMP_USERS from "../TEMP_USERS";

const useUsers = () => {
  const [users, setUsers] = useState(() => {
    if (localStorage.getItem("users")) {
      return [...JSON.parse(localStorage.getItem("users"))];
    } else {
      return [...TEMP_USERS];
    }
  });
  const addUser = (user) => {
    let loadedUsers;
    let updatedUsers;
    if (localStorage.getItem("users")) {
      loadedUsers = [...JSON.parse(localStorage.getItem("users"))];
      updatedUsers = [...loadedUsers, user];
    } else {
      updatedUsers = [user];
    }

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers((prevUsers) => [...users, user]);
  };

  const updateUser = (id, user) => {
    setUsers((prevUsers) =>
      prevUsers.map((mUser) =>
        mUser.id === id ? { ...mUser, ...user } : mUser
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  });

  return { users, updateUser, addUser };
};
export default useUsers;
