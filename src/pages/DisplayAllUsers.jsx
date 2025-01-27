import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DisplayAllUsers = () => {
  const { users: context } = useOutletContext();
  const { users, addUser } = context;
  const navigate = useNavigate();

  // Function to redirect users to their personal acount
  const handleRedirect = (userId) => {
    navigate(`/users/${userId}`);
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
            <button className="table items-center" onClick={() => { handleRedirect(user.id) }}>Manage Account</button>
            {/* button is like a link tag when clinked would redirect to specific user profile */}
          </li>
        ))}
      </ul>
    </div >

  );
};
export default DisplayAllUsers;
