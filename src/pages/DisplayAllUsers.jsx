import { useOutletContext } from "react-router-dom";

const DisplayAllUsers = () => {
  const { users: context } = useOutletContext();
  const { users, addUser } = context;
  // const [state, setState] = useState(); how to display users?

  // Function to deposit amount into user's balance
  function handleButtonClickDeposit(userId, amount) {
    if (amount <= 0) {
      console.error("Deposit must be Positive");
      return;
    }
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      // context.users[userIndex].balance += amount;
      // const newAmount = context.users[userIndex].balance + amount; how to update newAmount?
      console.log(`Deposited ${amount} to user ${userId}. New Balance: ${context.users[userIndex].balance}`);
    } else {
      console.error("User Not Found");
    }
  };
  // Function to withdraw amount from user's balance
  function handleButtonClickWithdraw(userId, amount) {
    if (amount <= 0) {
      console.error("Withdrawal amount must be Positive");
      return;
    }
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      if (context.users[userIndex].balance >= amount) {
        context.users[userIndex].balance -= amount;
        console.log(`Withdrew ${amount} from user ${userId}. New balance: ${context.users[userIndex].balance}`);
      } else {
        console.error("Insufficient Funds");
      }
    } else {
      console.error("User Not Found");
    }
  };

  return (
    <div className="overflow-x-auto">
      <ul className="mx-auto">
        {users.map((user) => (
          <li className="flex justify-center my-4" key={user.id}>
            {/* Render the users here */}
            <p className="table items-center">{user.firstName}</p>
            <p className="table items-center">{user.lastName}</p>
            <p className="table items-center">{user.balance}</p>
            <button className="table items-center" onClick={() => handleButtonClickDeposit(user.id, 1000)}>+</button>
            <button className="table items-center" onClick={handleButtonClickWithdraw}>-</button>
            {/* button is like a link tag when clinked would redirect to specific user profile */}
          </li>
        ))}
      </ul>
    </div >

  );
};
export default DisplayAllUsers;
