import React, { useEffect, useState, useContext } from "react";
import { numberWithCommas } from "../utils/format";
import { GlobalContext } from "../context/GlobalState";

export default function Gross() {
  const { transactions } = useContext(GlobalContext);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    let plus = transactions.reduce((total, trans) => {
      if (trans.amount > 0) {
        total += trans.amount;
      }
      return total;
    }, 0);
    let minus = transactions.reduce((total, trans) => {
      if (trans.amount < 0) {
        total += trans.amount;
      }
      return total;
    }, 0);
    setIncome(plus);
    setExpense(minus);
  }, [transactions]);

  return (
    <section className="gross">
      <div>
        <div className="head">Income</div>
        <main className="green">
          ${numberWithCommas(Math.abs(income).toFixed(2))}
        </main>
      </div>
      <div>
        <div className="head">Expense</div>
        <main className="red">
          ${numberWithCommas(Math.abs(expense).toFixed(2))}
        </main>
      </div>
    </section>
  );
}
