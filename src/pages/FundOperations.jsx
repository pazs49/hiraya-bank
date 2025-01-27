import React, { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import SendMoney from "./SendMoney";

const FundOperations = () => {
  const { id } = useParams();
  const { users: context } = useOutletContext();
  const { users } = context;

  const [depositAmount, setDepositAmount] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (users) {
      const user = users.find((user) => user.id === Number(id));
      setCurrentUser(user);
    }
  }, [users, id]);

  const deposit = (user, amount) => {
    user.balance += amount;

    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, balance: user.balance } : u
    );

    return user.balance;
  };

  const handleDeposit = () => {
    deposit(currentUser, depositAmount);
    setDepositAmount(0);
    setCurrentUser(users.find((user) => user.id === Number(id)));
  };

  if (!currentUser) return <div>Loading...</div>;

  return (
    <div>
      <h2>Fund Operations</h2>
      <p>{`${currentUser.firstName} ${currentUser.lastName}`}</p>
      <p>{`Balance: ${currentUser.balance}`}</p>
      {/* Deposit Section */}
      <div>
        <input
          type="number"
          value={depositAmount}
          onChange={(e) => setDepositAmount(Number(e.target.value))}
          placeholder="Enter deposit amount"
        />
        <button onClick={handleDeposit}>Deposit</button>
      </div>
      {/* Send Money Section
      <SendMoney /> */}
    </div>
  );
};

export default FundOperations;
