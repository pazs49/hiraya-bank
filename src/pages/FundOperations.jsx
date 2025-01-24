const FundOperations = () => {
  //Get the user and access the user's balance
  //Withdraw operation, deduct the value from the balance
  //Deposit operation, increase the value of the balance

  //function(from, to)
  //Get the user that will send and get the user that will receive

  const SendMoney = () => {
    return (
      <>
        <div>
          <h2>Send Money</h2>
          <TextField
            label="From Account:"
            placeholder="Enter your account number"
          />
          <TextField
            label="To Acoount:"
            placeholder="Enter recipient's account number"
          />
          <TextField
            label="Amount"
            type="number"
            placeholder="Enter amount to transfer"
          />
          <TextField label="Notes (Optional):" placeholder="Add a note" />
          <button>Send</button>
        </div>

        <ConfirmationDetails
          amount={amount}
          toAccount={toAccount}
          fromAccount={fromAccount}
          dateTime={dateTime}
        />
      </>
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
      <div>
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
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
        <h3>Sent</h3>
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
};
export default FundOperations;
