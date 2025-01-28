import { useState } from "react";
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

  // Function to search
  function SearchComponent({ users }) {
    const [users, setUsers] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const handleInputChange = (e) => {
      const value = e.target.value;
      setUsers(value);
      filterData(value);
    };

    const filterData = (value) => {
      const lowercasedValue = value.toLowerCase().trim();
      if (!lowercasedValue) {
        setFilteredData([]);
        return;
      }

      const filtered = data.filter((item) =>
        item.toLowerCase().includes(lowercasedValue)
      );
      setFilteredData(filtered);
    };
  }

  return (
    <div className="overflow-x-auto">
      <input type="text" placeholder="Search" value={users} onChange={handleInputChange} />
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
