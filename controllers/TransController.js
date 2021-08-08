const TransModal = require("./../Model/TransModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/AppError");

exports.getTransactions = catchAsync(async (req, res, next) => {
  const transactions = await TransModal.find();
  res.status(200).json({ status: "success", data: { transactions } });
});

exports.getTransaction = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const transaction = await TransModal.findById(id);

  if (!transaction) {
    return next(new AppError("Transaction not found", 404));
  }
  res.status(200).json({ status: "success", data: { transaction } });
});

exports.addTransaction = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const transaction = await TransModal.create(req.body);
  console.log({ transaction });
  res.json({ status: "success", data: { transaction } });
});

exports.removeTransaction = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const transaction = await TransModal.findByIdAndDelete(id);
  if (!transaction) {
    return next(new AppError("Transaction not found", 404));
  }
  res.status(200).json({ status: "success", data: null });
});
