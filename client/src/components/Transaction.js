import React from "react";
import { numberWithCommas } from "../utils/format";

export default function Transaction({ _id, title, amount, removeTransaction }) {
  return (
    <div className={`historyCard ${amount > 0 ? "green" : "red"}`}>
      <div className="head">{title}</div>
      <div className="amt">
        ${numberWithCommas(Math.abs(amount).toFixed(2))}
      </div>
      <button
        className="historyCard-btn"
        onClick={() => removeTransaction(_id)}
      >
        X
      </button>
    </div>
  );
}
