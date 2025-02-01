import TEMP_TRANSACTIONS from "../TEMP_TRANSACTIONS";

import { useEffect, useState } from "react";

const useTransactions = () => {
  const [transactions, setTransactions] = useState(() => {
    if (localStorage.getItem("transactions")) {
      return [...JSON.parse(localStorage.getItem("transactions"))];
    } else {
      return [...TEMP_TRANSACTIONS];
    }
  });

  const addTransaction = ({
    id,
    action,
    note = "",
    previousBalance,
    updatedBalance,
    to = -1,
    from = -1,
    date,
  }) => {
    let user = transactions.find((_transaction) => {
      return _transaction.id === Number(id);
    });

    if (!user) {
      user = {
        id,
        transactions: [],
      };
      setTransactions((previousTransactions) => [
        ...previousTransactions,
        user,
      ]);
    }

    const userTransactions = user.transactions;

    const newTransaction = {
      transactionId: userTransactions.length + 1,
      action,
      note,
      previousBalance,
      updatedBalance,
      to,
      from,
      date: String(new Date(new Date().getTime())),
    };

    const updatedUserTransactions = [...userTransactions, newTransaction];
    const updatedUser = { id, transactions: [...updatedUserTransactions] };

    setTransactions((previousUsers) => {
      return previousUsers.map((user) =>
        user.id === Number(id) ? updatedUser : user
      );
    });

    console.log("All transactions", transactions);
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return {
    transactions,
    addTransaction,
  };
};
export default useTransactions;
