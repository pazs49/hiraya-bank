import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";

const MainLayout = ({ logout, users, transactions }) => {
  return (
    <>
      <Navbar logout={logout} />
      <Outlet context={{ users, transactions }} />
    </>
  );
};
export default MainLayout;
