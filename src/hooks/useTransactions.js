import TEMP_TRANSACTIONS from "../TEMP_TRANSACTIONS";

import { useEffect, useState } from "react";

const useTransactions = () => {
  const [transactions, setTransactions] = useState(() => {
    let loadedTransactions;
    if (localStorage.getItem("transactions")) {
      loadedTransactions = [
        ...JSON.parse(localStorage.getItem("transactions")),
      ];
    } else {
      loadedTransactions = [];
    }

    return [...TEMP_TRANSACTIONS, ...loadedTransactions];
  });

  const addTransaction = ({
    userId,
    action,
    note = "",
    previousBalance,
    updatedBalance,
    to = -1,
    from = -1,
    date,
  }) => {
    const userTransactions = transactions.find((_transaction) => {
      return _transaction.id === Number(userId);
    });
    const updateTransactions = [
      ...userTransactions.transactions,
      {
        transactionId: userTransactions.transactions.length + 1,
        action,
        note,
        previousBalance,
        updatedBalance,
        to,
        from,
        date: String(new Date(new Date().getTime())),
      },
    ];
    const updatedUserTransactions = {
      ...userTransactions,
      updateTransactions,
    };
    setTransactions((prevTransactions) => {
      localStorage.setItem(
        "transactions",
        JSON.stringify([...prevTransactions, updatedUserTransactions])
      );
      return [...prevTransactions, updatedUserTransactions];
    });
    console.log("Updated User", updateTransactions);
    console.log("All transactions", transactions);
  };

  return {
    transactions,
    addTransaction,
  };
};
export default useTransactions;
