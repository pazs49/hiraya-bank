import React, { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import SendMoney from "./SendMoney";

const FundOperations = () => {
  const { id } = useParams();
  const { users: context } = useOutletContext();
  const { users } = context;
  const { transactions: transactionsContext } = useOutletContext();
  const { addTransaction } = transactionsContext;

  const [depositAmount, setDepositAmount] = useState();
  const [withdrawAmount, setWithdrawAmount] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (users) {
      const user = users.find((user) => user.id === Number(id));
      setCurrentUser(user);
    }
  }, [users, id]);

  const deposit = (user, amount) => {
    user.balance = Number(user.balance) + amount;

    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, balance: user.balance } : u
    );
    addTransaction({
      userId: id,
      action: "deposit",
      previousBalance: user.balance - amount,
      updatedBalance: user.balance,
    });
    return user.balance;
  };

  const withdraw = (user, amount) => {
    if (user.balance >= amount) {
      user.balance = Number(user.balance) - amount;

      const updatedUsers = users.map((u) =>
        u.id === user.id ? { ...u, balance: user.balance } : u
      );

      setError("");
      return user.balance;
    } else {
      setError("You do not have enough funds to complete this transaction!");
      return user.balance;
    }
  };

  const handleDeposit = () => {
    setError("");
    if (depositAmount > 0) {
      deposit(currentUser, depositAmount);
      setDepositAmount("");
      setCurrentUser(users.find((user) => user.id === Number(id)));
    }
  };

  const handleWithdraw = () => {
    if (withdrawAmount > 0) {
      withdraw(currentUser, withdrawAmount);
      setWithdrawAmount("");
      setCurrentUser(users.find((user) => user.id === Number(id)));
    }
  };

  if (!currentUser)
    return <div className="text-white text-center">Loading...</div>;

  return (
    <div className=" min-h-screen flex items-center justify-center p-4">
      <style>
        {`
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}
      </style>
      <div className="bg-gradient-to-b from-purple-700 via-purple-500 to-gray-900 rounded-2xl p-6 w-full max-w-md shadow-xl text-center text-white">
        <h1 className="text-2xl font-bold mb-4">
          {`${currentUser.firstName} ${currentUser.lastName}`}
        </h1>
        <p className="text-lg mb-6">{`Current Balance: ${currentUser.balance}`}</p>

        {error && (
          <div role="alert" className="alert alert-error mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <input
          type="number"
          value={depositAmount}
          onChange={(e) =>
            setDepositAmount(Math.max(0, Number(e.target.value)))
          }
          placeholder="Enter deposit amount"
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:ring-purple-300 mb-4"
        />
        <button
          onClick={handleDeposit}
          className="w-full bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 transition mb-4"
        >
          Deposit
        </button>

        <input
          type="number"
          value={withdrawAmount}
          onChange={(e) =>
            setWithdrawAmount(Math.max(0, Number(e.target.value)))
          }
          placeholder="Enter withdraw amount"
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:ring-purple-300 mb-4"
        />
        <button
          onClick={handleWithdraw}
          className="w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600 transition"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default FundOperations;
