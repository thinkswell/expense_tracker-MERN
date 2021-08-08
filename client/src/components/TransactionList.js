import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionList() {
  const { transactions, removeTransaction, isLoading } =
    useContext(GlobalContext);
  console.log(transactions);
  return (
    <section className="history">
      <div className="head">History</div>
      <main>
        {isLoading
          ? "Loading..."
          : transactions.length > 0
          ? transactions.map((transaction) => (
              <Transaction
                key={transaction._id}
                {...transaction}
                removeTransaction={removeTransaction}
              />
            ))
          : "No transactions."}
      </main>
    </section>
  );
}
