import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";

const Login = ({ isLoggedIn, login, logout }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleCheckLogin = () => {
    login(credentials, navigate);
  };

  const handleUsername = (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      username: e.target.value,
    }));
  };

  const handlePassword = (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      password: e.target.value,
    }));
  };

  useEffect(() => {
    // Prevent from going to Login page again when logged in
    if (isLoggedIn) {
      navigate("/");
    }
  });

  return (
    <div className="mt-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCheckLogin();
        }}
        className="w-1/3 mx-auto space-y-3 bg-slate-800 p-3 rounded-xl"
      >
        <h1>Hiraya Bank</h1>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            onChange={handleUsername}
            value={credentials.username}
            type="text"
            className="grow"
            placeholder="Username"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            onChange={handlePassword}
            type="password"
            className="grow"
            required
            placeholder="Password"
          />
        </label>
        <button className="btn w-full btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
