import React, { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const SendMoney = ({ selectedUser, users }) => {
  const [fromAccount, setFromAccount] = useState("");
  const [fromUser, setFromUser] = useState(null);
  const [toAccountId, setToAccountId] = useState("");
  const [toAccountDetails, setToAccountDetails] = useState(null);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [transactionCompleted, setTransactionCompleted] = useState(false);
  const [dateTime] = useState(new Date().toLocaleString());
  const [transactionID, setTransactionID] = useState("");

  // para ma include yung decimal

  useEffect(() => {
    if (selectedUser) {
      setFromAccount(selectedUser.accountNumber); // para sa pre-filled
      setFromUser(selectedUser); // para sa validation
    }
  }, [selectedUser]);

  useEffect(() => {
    const user = users.find((user) => user.id === parseInt(toAccountId, 10)); // para ma convert yung toAccounID bago i compare sa user.id , if not baka mag error yung findi()
    setToAccountDetails(user || null);
  }, [toAccountId, users]);

  const handleSendMoney = () => {
    if (!fromUser) {
      return setError("Sender not found!");
    }
    if (!toAccountDetails) {
      return setError("Invalid recipient account!");
    }
    if (parseFloat(amount) <= 0) {
      // para ma include yung decimal
      return setError("Invalid amount!");
    }

    if (fromUser.balance < parseFloat(amount)) {
      return setError("Insufficient balance!");
    }
    const transferAmount = parseFloat(amount);
    setFromUser({
      ...fromUser,
      balance: fromUser.balance - parseFloat(amount),
    });
    setToAccountDetails({
      ...toAccountDetails,
      balance: toAccountDetails.balance + parseFloat(amount),
    });

    const mockTransactionID = `TXN${Date.now()}`;
    setTransactionID(mockTransactionID);

    setError("");
    setTransactionCompleted(true);
  };

  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-300 h-screen flex justify-center items-center p-4">
      <div className="bg-gradient-to-b from-purple-700 via-purple-500 to-gray-900 rounded-2xl p-8 w-full max-w-md shadow-lg text-white text-center">
        <h2 className="text-2xl font-semibold mb-6">Send Money</h2>

        {!transactionCompleted ? (
          <>
            <div className="space-y-4">
              <TextField
                label="From Account:"
                value={fromAccount}
                disabled={true}
              />

              <div className="text-left">
                <label className="block text-sm font-bold mb-2">
                  To Account:
                </label>
                <select
                  value={toAccountId}
                  onChange={(e) => setToAccountId(e.target.value)}
                  className="w-full p-3 rounded-lg border-none outline-none bg-gray-700 text-white"
                >
                  <option value="" disabled>
                    Select recipient by User ID
                  </option>
                  {users
                    .filter((user) => user.id !== selectedUser?.id)
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

              {error && (
                <div role="alert" className="alert alert-error mt-4">
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

              <button
                className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg mt-4 transition"
                onClick={handleSendMoney}
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="mt-4">
            <ConfirmationDetails
              amount={amount}
              toAccount={toAccountDetails.accountNumber}
              fromAccount={fromAccount}
              dateTime={dateTime}
              transactionID={transactionID}
              fromUserBalance={fromUser.balance.toFixed(2)}
              toUserBalance={toAccountDetails.balance.toFixed(2)}
            />
          </div>
        )}
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
  fromUserBalance,
  toUserBalance,
}) => {
  return (
    <div className="bg-gray-700 rounded-lg p-4 text-left">
      <h3 className="text-lg font-semibold mb-3">Transaction Summary</h3>
      <p>
        Amount Transferred: <strong>${parseFloat(amount).toFixed(2)}</strong>
      </p>
      <p>
        From Account: <strong>{fromAccount}</strong> (Balance:{" "}
        <strong>${fromUserBalance}</strong>)
      </p>
      <p>
        To Account: <strong>{toAccount}</strong> (Balance:{" "}
        <strong>${toUserBalance}</strong>)
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
