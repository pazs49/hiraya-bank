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
  const [pFilterData, pSetFilterData] = useState(users);
  const n = 10;

  // Function to redirect users to their personal account
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
      setFilteredData([...users]);
      return;
    }
    // filter to loop in collection of array
    const filtered = pFilterData.filter(function filterUser(user) {
      const fullName = user.firstName + " " + user.lastName;
      return fullName.toLowerCase().includes(lowercasedValue);
    });
    pSetFilterData(filtered);
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

      <div className="overflow-x-auto w-1/2 mx-auto bg-slate-50 bg-opacity-10 p-5 rounded-xl ">
        <table className="table table-md p-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Balance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pFilterData &&
              pFilterData.map((user, index) => (
                <tr key={user.id}>
                  <td>{user.firstName + " " + user.lastName}</td>
                  <td>{user.balance}</td>
                  <td>
                    <button
                      className="btn btn-sm"
                      onClick={() => {
                        handleRedirect(user.id);
                      }}
                    >
                      Manage Account
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <ReactPaginate
        containerClassName={
          "flex space-x-3 justify-center mt-4 flex items-center"
        }
        pageClassName={""}
        activeClassName={"btn"}
        onPageChange={(event) => setPage(event.selected)}
        pageCount={Math.ceil(filteredData.length / n)}
        breakLabel="..."
      />
    </div>
  );
};
export default DisplayAllUsers;
