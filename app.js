const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const TransRouter = require("./Router/TransRouter");
const AppError = require("./utils/AppError");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", TransRouter);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(express.static("build"));

  app.all("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
