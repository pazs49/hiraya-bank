import { useOutletContext } from "react-router-dom";

const DisplayAllUsers = () => {
  const { users: context } = useOutletContext();
  const { users } = context;
  const { addUser } = context;

  function handleButtonClick(e) {

  }
  return (
    <div className="overflow-x-auto">
      <ul className="mx-auto">
        {users.map((user) => (
          <li className="flex justify-center my-4" key={user.id}>
            {/* Render the users here */}
            <p className="table items-center">{user.firstName}</p>
            <p className="table items-center">{user.lastName}</p>
            <p className="table items-center">{user.balance}</p>
            <button className="table items-center" onClick={handleButtonClick}>+</button>
            {/* button is like a link tag when clinked would redirect to specific user profile */}
          </li>
        ))}
        {/* {addUser.map((user) => (
          <li className="flex justify-center my-4" key={user.id}>
            <p className="table items-center">{user.firstName}</p>
            <p className="table items-center">{user.lastName}</p>
            <p className="table items-center">{user.balance}</p>
            <button className="table items-center">san</button>
          </li>
        ))} */}
      </ul>
    </div >

  );
};
export default DisplayAllUsers;
