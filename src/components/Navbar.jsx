import { useNavigate } from "react-router-dom";

const Navbar = ({ logout }) => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    logout(navigate);
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleAllUsers = () => {
    navigate("/users");
  };

  return (
    <div className="navbar bg-base-100 mx-auto px-10">
      <div className="flex-1">
        <a className="text-xl cursor-pointer" onClick={handleHome}>
          {/* <div className="navbar bg-base-200 shadow-md p-4 w-full fixed top-0 left-0 z-50 rounded-b-lg text-gray-300">
      <div className="flex-1">
        <a
          className="text-2xl font-bold text-gray-300 hover:text-gray-700 transition cursor-pointer"
          onClick={handleHome}
        > */}
          Hiraya Bank
        </a>
      </div>
      {/* Navigation Links */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-2 space-x-4">
          <li>
            <a
              className=" text-gray-300 hover:text-gray-700 transition cursor-pointer"
              onClick={handleAllUsers}
            >
              All Users
            </a>
          </li>
          <li>
            <a
              className=" text-gray-300 hover:text-gray-700 transition cursor-pointer"
              onClick={handleRegister}
            >
              Register
            </a>
          </li>
          <li>
            <a
              className="bg-red-500 hover:bg-red-400 text-white font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
