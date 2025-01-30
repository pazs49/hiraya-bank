import TEMP_TRANSACTIONS from "../TEMP_TRANSACTIONS";

import { useState } from "react";

const useTransactions = () => {
  const [transactions, setTransactions] = useState([...TEMP_TRANSACTIONS]);

  return {
    transactions,
  };
};
export default useTransactions;
