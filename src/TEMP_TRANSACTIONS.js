const TEMP_TRANSACTIONS = [
  {
    id: 1,
    transactions: [
      {
        transactionId: 1,
        action: "deposit",
        previousBalance: 500,
        updatedBalance: 1000,
        to: -1,
        from: -1,
        notes: " ",
      },
      {
        transactionId: 2,
        action: "send",
        previousBalance: 1000,
        updatedBalance: 400,
        to: -1,
        from: 1,
        notes: " ",
      },
      {
        transactionId: 3,
        action: "receive",
        previousBalance: 400,
        updatedBalance: 500,
        to: -1,
        from: 3,
        notes: " ",
      },
      {
        transactionId: 4,
        action: "withdraw",
        previousBalance: 500,
        updatedBalance: 200,
        to: -1,
        from: -1,
        notes: " ",
      },
    ],
  },
];

export default TEMP_TRANSACTIONS;
