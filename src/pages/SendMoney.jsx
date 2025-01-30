import React, { useState } from "react";

const mockUser1 = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  balance: 5000,
};

const mockUser2 = {
  id: 2,
  name: "Mike Cruz",
  email: "mikercruz@example.com",
  balance: 6000,
};

const users = { mockUser1, mockUser2 };

const SendMoney = () => {
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [dateTime] = useState(new Date().toLocaleString());

  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-300 h-screen flex justify-center items-center p-4">
      <div className="bg-gradient-to-b from-purple-700 via-purple-500 to-gray-900 rounded-2xl p-8 w-full max-w-md shadow-lg text-white text-center">
        <h2 className="text-2xl font-semibold mb-6">Send Money</h2>

        <div className="space-y-4">
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
        </div>

        <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg mt-4 transition">
          Send
        </button>

        <div className="mt-4">
          <ConfirmationDetails
            amount={amount}
            toAccount={toAccount}
            fromAccount={fromAccount}
            dateTime={dateTime}
          />
        </div>
      </div>
    </div>
  );
};

const TextField = ({ label, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="text-left">
      <label className="block text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded-lg border-none outline-none bg-gray-700 text-white"
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
        <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg transition">
          Send Another
        </button>
        <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg transition">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SendMoney;
