import ProtectedRoute from "./components/ProtectedRoute";

import MainLayout from "./layouts/MainLayout";

import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import DisplayAllUsers from "./pages/DisplayAllUsers";
import GetUserBalance from "./pages/GetUserBalance";
import FundOperations from "./pages/FundOperations";

import useAuthentication from "./hooks/useAuthentication";
import useUsers from "./hooks/useUsers";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

function App() {
  const { isLoggedIn, login, logout } = useAuthentication();
  const users = useUsers();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <MainLayout users={users} logout={logout} />
        </ProtectedRoute>
      ),
      errorElement: <NotFoundPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/register", element: <Registration /> },
        { path: "/users", element: <DisplayAllUsers /> },
        { path: "/users/:id", element: <FundOperations /> },
      ],
    },
    {
      path: "/login",
      element: <Login isLoggedIn={isLoggedIn} login={login} logout={logout} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
