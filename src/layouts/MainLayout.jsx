import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";

const MainLayout = ({ logout, ...props }) => {
  return (
    <>
      <Navbar logout={logout} />
      <Outlet context={{ users: props.users }} />
    </>
  );
};
export default MainLayout;
