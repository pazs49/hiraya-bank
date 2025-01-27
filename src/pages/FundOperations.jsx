import { useOutletContext, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
    const newBalance = deposit(currentUser, depositAmount);
    setDepositAmount(0);
    setCurrentUser(users.find((user) => user.id === Number(id)));
  };

  if (!currentUser) return <div>Loading...</div>;

  return (
    <div>
      <p>{`${currentUser.firstName} ${currentUser.lastName}`}</p>
      <p>{`Balance: ${currentUser.balance}`}</p>

      <input
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(Number(e.target.value))}
        placeholder="Enter deposit amount"
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button
        onClick={() => {
          console.log(users);
        }}
      >
        LOG USERS
      </button>
    </div>
  );
};

export default FundOperations;
