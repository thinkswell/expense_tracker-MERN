import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "./../utils/format";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const total = transactions.reduce(
      (total, tran) => (total += parseFloat(tran.amount)),
      0
    );

    setBalance(total);
  }, [transactions]);

  return (
    <section className="balance">
      <div className="head">Your Balance:</div>
      <main className={`${balance >= 0 ? "green" : "red"}`}>
        ${numberWithCommas(Math.abs(balance).toFixed(2))}
      </main>
    </section>
  );
}
