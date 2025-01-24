import { useState, useEffect } from "react";

const CREDENTIALS = {
  username: "admin",
  password: "admin",
};

const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const _isLoggedIn = localStorage.getItem("isLoggedIn");
    if (_isLoggedIn === "logged") {
      return true;
    } else {
      return false;
    }
  });

  const login = (credentials, navigate) => {
    if (
      credentials.username === CREDENTIALS.username &&
      credentials.password === CREDENTIALS.password
    ) {
      localStorage.setItem("isLoggedIn", "logged");
      setIsLoggedIn(true);
      navigate("/");
      console.log("Welcome admin!");
    } else {
      console.log("Wrong");
    }
  };

  const logout = (navigate) => {
    setIsLoggedIn(() => {
      localStorage.setItem("isLoggedIn", "notLogged");
      return false;
    });
    navigate("/login");
  };

  return { isLoggedIn, login, logout };
};

export default useAuthentication;
