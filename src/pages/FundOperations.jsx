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
    deposit(currentUser, depositAmount);
    const newBalance = deposit(currentUser, depositAmount);
    setDepositAmount(0);
    setCurrentUser(users.find((user) => user.id === Number(id)));
  };

  const SendMoney = () => {
    const [fromAccount, setFromAccount] = useState("");
    const [toAccount, setToAccount] = useState("");
    const [amount, setAmount] = useState("");
    const [dateTime] = useState(new Date().toLocaleString());

    return (
      <div>
        <h2>Send Money</h2>
        <TextField
          label="From Account:"
          placeholder="Enter your account number"
          value={fromAccount}
          onChange={(e) => setFromAccount(e.target.value)}
        />
        <TextField
          label="To Account:"
          placeholder="Enter recipient's account number"
          value={toAccount}
          onChange={(e) => setToAccount(e.target.value)}
        />
        <TextField
          label="Amount"
          type="number"
          placeholder="Enter amount to transfer"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <TextField
          label="Notes (Optional):"
          placeholder="Add a note"
          value=""
          onChange={() => {}}
        />
        <button>Send</button>

        <ConfirmationDetails
          amount={amount}
          toAccount={toAccount}
          fromAccount={fromAccount}
          dateTime={dateTime}
        />
      </div>
    );
  };

  const TextField = ({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
  }) => {
    return (
      <div style={{ marginBottom: "10px" }}>
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ display: "block", marginTop: "5px", width: "100%" }}
        />
      </div>
    );
  };

  const ConfirmationDetails = ({
    amount,
    toAccount,
    fromAccount,
    dateTime,
  }) => {
    return (
      <div>
        <h3>Transaction Summary</h3>
        <p>
          Amount: <strong>{amount}</strong>
        </p>
        <p>
          To Account: <strong>{toAccount}</strong>
        </p>
        <p>
          From Account: <strong>{fromAccount}</strong>
        </p>
        <p>
          Date & Time: <strong>{dateTime}</strong>
        </p>
        <button>Send Another</button>
        <button>Go Back to Main Page</button>
      </div>
    );
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

      {/* Send Money Section */}
      <SendMoney />
      <p>{`${currentUser.firstName} ${currentUser.lastName}`}</p>
      <p>{`Balance: ${currentUser.balance}`}</p>

      <input
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(Number(e.target.value))}
        placeholder="Enter deposit amount"
      />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default FundOperations;
