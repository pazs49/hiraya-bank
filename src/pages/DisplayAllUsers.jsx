import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DisplayAllUsers = () => {
  const { users: context } = useOutletContext();
  const { users, addUser } = context;
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();



  // Function to redirect users to their personal acount
  const handleRedirect = (userId) => {
    navigate(`/users/${userId}`);
  };
  // Function to search
  const filteredUsers = users.filter(user => {
    if (!user || !user.name) return false; // Filter out users without a name
    return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  return (
    <div className="overflow-x-auto">
      <input type="text" onChange={handleSearch} value={searchTerm} placeholder="Search User" />
      {filteredUsers.map((user) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
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
