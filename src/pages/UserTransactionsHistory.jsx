import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const UserTransactionsHistory = () => {
  const { transactions: context } = useOutletContext();
  const { transactions } = context;
  const { id } = useParams();

  const [userTransactions, setUserTransactions] = useState(() => {
    const _transactions = transactions.find((transaction) => {
      return transaction.id === Number(id);
    });
    return _transactions || { transactions: [] };
  });

  return userTransactions.transactions.length > 0 ? (
    <div className="overflow-x-auto w-11/12 mx-auto bg-slate-50 bg-opacity-10 p-5 rounded-xl mt-4">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Action</th>
            <th>Previous Balance</th>
            <th>Updated Balance</th>
            <th>Notes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {userTransactions.transactions.map((transaction) => {
            return (
              <tr key={transaction.transactionId}>
                <td>{transaction.transactionId}</td>
                <td>{transaction.action}</td>
                <td>{transaction.previousBalance}</td>
                <td>{transaction.updatedBalance}</td>
                <td>{transaction.notes}</td>
                <td>{transaction.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="flex justify-center mt-2 text-xl">
      No Transactions Available
    </div>
  );
};
export default UserTransactionsHistory;
