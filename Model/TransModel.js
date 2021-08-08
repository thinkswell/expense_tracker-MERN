const mongoose = require("mongoose");

const TransactionsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A transaction must have a title."],
  },
  amount: {
    type: Number,
    required: [true, "Amount can't be empty"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Transactions = mongoose.model("transactions", TransactionsSchema);

module.exports = Transactions;
