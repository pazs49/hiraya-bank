import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const PrizeRaffle = ({
  transactions: transactionsContext,
  users: usersContext,
}) => {
  const inputFromDate = useRef(null);
  const inputToDate = useRef(null);

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const [showFromCalender, setShowFromCalendar] = useState(false);
  const [showToCalender, setShowToCalendar] = useState(false);

  const [filteredUsers, setFilteredUsers] = useState(
    transactionsContext.transactions
  );

  useEffect(() => {
    setFilteredUsers(() => {
      const filteredTransactions = transactionsContext.transactions.filter(
        (user) => {
          return user.transactions.some((transaction) => {
            return (
              new Date(transaction.date) >= new Date(fromDate) &&
              new Date(transaction.date) <= new Date(toDate)
            );
          });
        }
      );
      const users = [];
      filteredTransactions.forEach((transaction) => {
        const matchingUser = usersContext.users.find(
          (user) => user.id === transaction.id
        );
        if (matchingUser) users.push(matchingUser);
      });
      return users;
    });
  }, [fromDate, toDate]);

  useEffect(() => {
    console.log(filteredUsers);
    // console.log(usersContext);
  });

  return (
    <>
      <div className="flex m-2 space-x-1">
        <input
          ref={inputFromDate}
          onClick={() => {
            setShowFromCalendar(!showFromCalender);
            setShowToCalendar(false);
          }}
          type="text"
          placeholder="From"
          className="input input-bordered w-full max-w-xs"
        />

        <input
          ref={inputToDate}
          onClick={() => {
            setShowToCalendar(!showToCalender);
            setShowFromCalendar(false);
          }}
          type="text"
          placeholder="To"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn">Search</button>
      </div>
      {showFromCalender && (
        <div className="m-2">
          <Calendar
            onChange={(e) => {
              setFromDate(e);
              setShowFromCalendar(false);
              inputFromDate.current.value = new Date(e)
                .toISOString()
                .split("T")[0];
            }}
          />
        </div>
      )}
      {showToCalender && (
        <div className="m-2">
          <Calendar
            onChange={(e) => {
              setToDate(e);
              setShowToCalendar(false);
              inputToDate.current.value = new Date(e)
                .toISOString()
                .split("T")[0];
            }}
          />
        </div>
      )}

      {filteredUsers.length > 0 && (
        <div className="flex flex-col space-y-3">
          <div className="overflow-x-auto w-1/2 mx-auto bg-slate-50 bg-opacity-10 p-5 rounded-xl ">
            <table className="table table-md p-5">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers &&
                  filteredUsers.map((user, index) => (
                    <tr key={user.id}>
                      <td>{user.firstName + " " + user.lastName}</td>
                      <td>{user.balance}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <button className="btn btn-success w-fit items-center mx-auto">
            Raffle
          </button>
        </div>
      )}
    </>
  );
};

export default PrizeRaffle;
