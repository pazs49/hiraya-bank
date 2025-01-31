import { useState } from "react";
import TEMP_USERS from "../TEMP_USERS";

const useUsers = () => {
  const [users, setUsers] = useState(() => {
    const loadedUsers = [];
    if (localStorage.getItem("users")) {
      JSON.parse(localStorage.getItem("users")).forEach((user) => {
        loadedUsers.push(user);
      });
    } else {
      localStorage.setItem("users", []);
    }
    const allUsers = [...TEMP_USERS, ...loadedUsers];
    return [...TEMP_USERS, ...loadedUsers];
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

  return { users, updateUser, addUser };
};
export default useUsers;
