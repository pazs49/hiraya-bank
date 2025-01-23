import { useNavigate } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuthentication();

  return (
    <div>
      <ul>
        <li>
          <button
            onClick={() => {
              logout(navigate);
            }}
            className="btn"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
