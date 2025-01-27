import { useOutletContext, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const FundOperations = () => {
  const { id } = useParams();
  const { users: context } = useOutletContext();
  const { users } = context;

  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
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

  const withdraw = (user, amount) => {
    if (user.balance >= amount) {
      user.balance -= amount;

      const updatedUsers = users.map((u) =>
        u.id === user.id ? { ...u, balance: user.balance } : u
      );

      return user.balance;
    }
    return user.balance;
  };

  const handleDeposit = () => {
    if (depositAmount > 0) {
      deposit(currentUser, depositAmount);
      setDepositAmount(0);
      setCurrentUser(users.find((user) => user.id === Number(id)));
    }
  };

  const handleWithdraw = () => {
    if (withdrawAmount > 0) {
      withdraw(currentUser, withdrawAmount);
      setWithdrawAmount(0);
      setCurrentUser(users.find((user) => user.id === Number(id)));
    }
  };

  if (!currentUser) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className="bg-gradient-to-r from-purple-700 to-purple-400 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gradient-to-b from-purple-700 via-purple-500 to-gray-900 rounded-2xl p-6 w-full max-w-md shadow-xl text-center text-white">
        <h1 className="text-2xl font-bold mb-4">
          {`${currentUser.firstName} ${currentUser.lastName}`}
        </h1>
        <p className="text-lg mb-6">{`Balance: ${currentUser.balance}`}</p>

        <input
          type="number"
          value={depositAmount}
          onChange={(e) => setDepositAmount(Math.max(0, Number(e.target.value)))}
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
          onChange={(e) => setWithdrawAmount(Math.max(0, Number(e.target.value)))}
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
