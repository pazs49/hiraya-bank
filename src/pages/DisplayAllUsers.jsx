import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const DisplayAllUsers = () => {
  const { users: context } = useOutletContext();
  const { users, addUser } = context;
  const navigate = useNavigate();

  // Pagination
  const [page, setPage] = useState(0);
  const [pFilterData, pSetFilterData] = useState();
  const n = 5;

  // Function to redirect users to their personal acount
  function handleRedirect(userId) {
    navigate(`/users/${userId}`);
  }

  // Function to search
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState(users);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (!lowercasedValue) {
      setFilteredData(users);
      return;
    }
    // filter to loop in collection of array
    const filtered = users.filter(function filterUser(user) {
      const fullName = user.firstName + " " + user.lastName;
      return fullName.toLowerCase().includes(lowercasedValue);
    });
    setFilteredData(filtered);
  };
  useEffect(() => {
    pSetFilterData(
      filteredData.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
  }, [page, filteredData]);
  return (
    <div className="">
      <label className="input input-bordered flex items-center gap-2 m-2 w-[20%] mx-auto">
        <input
          className="grow input-bordered input-secondary w-full max-w-xs"
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <ul className="mx-auto">
        <ul>
          {pFilterData &&
            pFilterData.map((user, index) => (
              <li className="flex justify-center my-4" key={user.id}>
                <p className="table items-center">{user.firstName}</p>
                <p className="table items-center">{user.lastName}</p>
                <p className="table items-center">{user.balance}</p>
                <button
                  className="table items-center btn btn-outline btn-secondary btn-sm btn-ghost w-[10%] text-center"
                  onClick={() => {
                    handleRedirect(user.id);
                  }}
                >
                  Manage Account
                </button>
              </li>
            ))}
        </ul>
      </ul>
      <ReactPaginate
        containerClassName={"flex space-x-3 justify-center"}
        pageClassName={""}
        activeClassName={"bg-blue-500"}
        onPageChange={(event) => setPage(event.selected)}
        pageCount={Math.ceil(filteredData.length / n)}
        breakLabel="..."
      />
    </div>
  );
};
export default DisplayAllUsers;
