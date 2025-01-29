import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const SendMoney = ({ userId }) => {
  const { users: context } = useOutletContext();
  const { users } = context;
  const [fromAccount, setFromAccount] = useState("");
  const [toAccountId, setToAccountId] = useState("");
  const [toAccountDetails, setToAccountDetails] = useState(null);
  const [amount, setAmount] = useState("");
  const [dateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const user = users.find((user) => user.id === userId);
    if (user) {
      setFromAccount(user.accountNumber);
    }
  }, [userId]);

  useEffect(() => {
    const user = users.find((user) => user.id === parseInt(toAccountId, 10));
    setToAccountDetails(user || null);
  }, [toAccountId]);

  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-300 h-screen flex justify-center items-center p-4">
      <div className="bg-gradient-to-b from-purple-700 via-purple-500 to-gray-900 rounded-2xl p-8 w-full max-w-md shadow-lg text-white text-center">
        <h2 className="text-2xl font-semibold mb-6">Send Money</h2>

        <div className="space-y-4">
          <TextField
            label="From Account:"
            value={fromAccount}
            disabled={true}
          />
          <div className="text-left">
            <label className="block text-sm font-bold mb-2">To Account:</label>
            <select
              value={toAccountId}
              onChange={(e) => setToAccountId(e.target.value)}
              className="w-full p-3 rounded-lg border-none outline-none bg-gray-700 text-white"
            >
              <option value="" disabled>
                Select recipient by User ID
              </option>
              {users
                .filter((user) => user.id !== userId)
                .map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.id} - {user.name}
                  </option>
                ))}
            </select>
          </div>
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
        </div>

        <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg mt-4 transition">
          Send
        </button>

        <div className="mt-4">
          <ConfirmationDetails
            amount={amount}
            toAccount={toAccountDetails ? toAccountDetails.accountNumber : ""}
            fromAccount={fromAccount}
            dateTime={dateTime}
          />
        </div>
      </div>
    </div>
  );
};

const TextField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="text-left">
      <label className="block text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full p-3 rounded-lg border-none outline-none bg-gray-700 text-white ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
};

const ConfirmationDetails = ({
  amount,
  toAccount,
  fromAccount,
  dateTime,
  transactionID,
}) => {
  return (
    <div className="bg-gray-700 rounded-lg p-4 text-left">
      <h3 className="text-lg font-semibold mb-3">Transaction Summary</h3>
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
      <p>
        Transaction ID: <strong>{transactionID}</strong>
      </p>
      <div className="flex justify-between mt-4">
        <button
          className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg transition"
          onClick={() => window.location.reload()}
        >
          Send Another
        </button>
        <button
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg transition"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SendMoney;
