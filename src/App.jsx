import ProtectedRoute from "./components/ProtectedRoute";

import MainLayout from "./layouts/MainLayout";

import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import useAuthentication from "./hooks/useAuthentication";

function App() {
  const { isLoggedIn } = useAuthentication();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <MainLayout />
        </ProtectedRoute>
      ),
      errorElement: <NotFoundPage />,
      children: [{ path: "/", element: <Home /> }],
    },
    { path: "/login", element: <Login isLoggedIn={isLoggedIn} /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
