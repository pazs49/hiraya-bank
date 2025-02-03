import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SendMoney from "./pages/SendMoney";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import DisplayAllUsers from "./pages/DisplayAllUsers";
import FundOperations from "./pages/FundOperations";
import PrizeRaffle from "./pages/PrizeRaffle";
import UserDashboard from "./pages/UserDashboard";
import UserTransactionsHistory from "./pages/UserTransactionsHistory";

import useAuthentication from "./hooks/useAuthentication";
import useUsers from "./hooks/useUsers";
import useTransactions from "./hooks/useTransactions";

import "./App.css";

function App() {
  const { isLoggedIn, login, logout } = useAuthentication();
  const users = useUsers();
  const transactions = useTransactions();

  const mockUsers = [
    { id: 1, name: "Alice", accountNumber: "123456", balance: 1000 },
    { id: 2, name: "Bob", accountNumber: "234567", balance: 1500 },
    { id: 3, name: "Charlie", accountNumber: "345678", balance: 2000 },
    { id: 4, name: "David", accountNumber: "456789", balance: 2500 },
    { id: 5, name: "Eve", accountNumber: "567890", balance: 3000 },
    { id: 6, name: "Frank", accountNumber: "678901", balance: 3500 },
    { id: 7, name: "Grace", accountNumber: "789012", balance: 4000 },
    { id: 8, name: "Hank", accountNumber: "890123", balance: 4500 },
    { id: 9, name: "Ivy", accountNumber: "901234", balance: 5000 },
    { id: 10, name: "Jack", accountNumber: "012345", balance: 5500 },
  ];

  const [selectedUser, setSelectedUser] = useState(mockUsers[0]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <MainLayout
            users={users}
            transactions={transactions}
            logout={logout}
          />
        </ProtectedRoute>
      ),
      errorElement: <NotFoundPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/register", element: <Registration /> },
        { path: "/users", element: <DisplayAllUsers /> },
        { path: "/users/:id", element: <UserDashboard /> },
        {
          path: "/users/:id/transactions-history",
          element: <UserTransactionsHistory />,
        },
        { path: "/users/:id", element: <FundOperations /> },
        {
          path: "/users/:id/send-money",
          element: <SendMoney />,
        },
        { path: "/send-money", element: <SendMoney /> },
        { path: "/raffle", element: <PrizeRaffle /> },
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
