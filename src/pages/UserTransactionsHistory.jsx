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
    <div className="overflow-x-auto">
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
                <td>
                  {transaction.notes.trim().length > 1
                    ? transaction.notes
                    : "Empty"}
                </td>
                <td>{transaction.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div>No Transactions Available</div>
  );
};
export default UserTransactionsHistory;
