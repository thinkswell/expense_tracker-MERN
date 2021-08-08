const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

const DATABASE_LOCAL = process.env.LOCAL_DATABASE_URL;
const DATABASE = process.env.DATABASE_URL.replace(
  /<password>/i,
  process.env.PASSWORD
);

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected!!!");
  })
  .catch((err) => console.log("ERROR", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
