import { useState } from "react";
import Login from "./Login";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const _isLoggedIn = localStorage.getItem("isLoggedIn");
    return _isLoggedIn === true;
  });

  return <></>;
};
export default Home;
