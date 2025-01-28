import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function SearchComponent({ users }) {
  const [inputValue, setInputValue] = useState("");
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
  console.log(users);
  return (
    <input
      type="text"
      placeholder="Search"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}

export default SearchComponent;
