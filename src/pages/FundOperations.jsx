import { useOutletContext, useParams } from "react-router-dom";

const FundOperations = () => {
  const { id } = useParams();
  const { users: context } = useOutletContext();
  const { users } = context;

  const getCurrentUser = () => {
    const user = users.find((user) => {
      return user.id === Number(id);
    });
    return user;
  };

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
  // return (
  //   <div>
  //     <p>{`${getCurrentUser().firstName} ${getCurrentUser().lastName}`}</p>
  //   </div>
  // );
};
export default FundOperations;
