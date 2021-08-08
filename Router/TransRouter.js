const express = require("express");
const TranController = require("./../controllers/TransController");
const router = express.Router();

router.route("/transactions").get(TranController.getTransactions);

router
  .route("/transaction/:id")
  .get(TranController.getTransaction)
  .delete(TranController.removeTransaction);

router.route("/transaction").post(TranController.addTransaction);

module.exports = router;
