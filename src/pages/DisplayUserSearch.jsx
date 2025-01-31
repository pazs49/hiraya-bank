import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function SearchComponent({ users }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (!lowercasedValue) {
      setFilteredData([]);
      return;
    }
    // filter to loop in collection of array
    const filtered = users.filter((user) =>
      user.firstName.toLowerCase().includes(lowercasedValue)
    );
    setFilteredData(filtered);
  };
  console.log(users);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {filteredData.map((user, index) => (
          <li key={index}>{user.firstName}</li>
        ))}
      </ul>
    </div>

  );
}

export default SearchComponent;
