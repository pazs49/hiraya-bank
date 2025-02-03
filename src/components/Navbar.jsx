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
          Hiraya Bank
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={handleAllUsers}>All Users</a>
          </li>
          <li>
            <a onClick={handleRegister}>Register</a>
          </li>
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
