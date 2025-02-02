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
        notes: "Bill payment for utilities.",
        date: String(new Date("2023-12-24")),
      },
      {
        transactionId: 2,
        action: "send",
        previousBalance: 1000,
        updatedBalance: 400,
        to: -1,
        from: 1,
        notes: "Sent money to John for rent.",
        date: String(new Date("2/10/2023")),
      },
      {
        transactionId: 3,
        action: "receive",
        previousBalance: 400,
        updatedBalance: 500,
        to: -1,
        from: 3,
        notes: "Received payment from Alice for lunch.",
        date: String(new Date("3/25/2023")),
      },
      {
        transactionId: 4,
        action: "withdraw",
        previousBalance: 500,
        updatedBalance: 200,
        to: -1,
        from: -1,
        notes: "ATM withdrawal for groceries.",
        date: String(new Date("4/5/2023")),
      },
    ],
  },
  {
    id: 2,
    transactions: [
      {
        transactionId: 1,
        action: "deposit",
        previousBalance: 500,
        updatedBalance: 1000,
        to: -1,
        from: -1,
        notes: "Deposit from paycheck.",
        date: String(new Date("5/10/2023")),
      },
      {
        transactionId: 2,
        action: "send",
        previousBalance: 1000,
        updatedBalance: 400,
        to: -1,
        from: 1,
        notes: "Sent payment for credit card bill.",
        date: String(new Date("6/1/2023")),
      },
      {
        transactionId: 3,
        action: "receive",
        previousBalance: 400,
        updatedBalance: 500,
        to: -1,
        from: 3,
        notes: "Received loan repayment from Bob.",
        date: String(new Date("7/20/2023")),
      },
      {
        transactionId: 4,
        action: "withdraw",
        previousBalance: 500,
        updatedBalance: 200,
        to: -1,
        from: -1,
        notes: "Withdrew cash for weekend trip.",
        date: String(new Date("8/15/2023")),
      },
    ],
  },
  {
    id: 3,
    transactions: [
      {
        transactionId: 1,
        action: "deposit",
        previousBalance: 500,
        updatedBalance: 1000,
        to: -1,
        from: -1,
        notes: "Deposit from business payment.",
        date: String(new Date("9/5/2023")),
      },
      {
        transactionId: 2,
        action: "send",
        previousBalance: 1000,
        updatedBalance: 400,
        to: -1,
        from: 1,
        notes: "Sent money to Sarah for office supplies.",
        date: String(new Date("10/10/2023")),
      },
      {
        transactionId: 3,
        action: "receive",
        previousBalance: 400,
        updatedBalance: 500,
        to: -1,
        from: 3,
        notes: "Received payment from Mark for services.",
        date: String(new Date("11/1/2023")),
      },
      {
        transactionId: 4,
        action: "withdraw",
        previousBalance: 500,
        updatedBalance: 200,
        to: -1,
        from: -1,
        notes: "Withdrew cash for personal expenses.",
        date: String(new Date("12/12/2023")),
      },
    ],
  },
];

export default TEMP_TRANSACTIONS;
