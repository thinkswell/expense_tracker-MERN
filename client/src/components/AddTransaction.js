import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const { addTransaction, openAlert } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || amount === "") {
      openAlert("Title or amount can't be empty.", false);
      return;
    }
    if (isNaN(amount)) {
      openAlert("Please enter a valid amount.", false);
      return;
    }
    const transaction = {
      amount: parseFloat(amount).toFixed(2),
      title,
    };
    addTransaction(transaction);
    setTitle("");
    setAmount("");
  };

  return (
    <section className="add">
      <div className="head">Add Transaction</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="head">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="What for? (e.g. Cash, Books, Food)"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="amount" className="head">
          Amount:
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          placeholder="(e.g. '-10.0':Expense,'+10.00':Income)"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </section>
  );
}
