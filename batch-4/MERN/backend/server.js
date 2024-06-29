const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./utils/db.js");
const UserRouter = require("./router/user.router.js");
const app = express();

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", UserRouter);

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw err;
  }
  connectDB();
  console.log(`http://127.0.0.1:${process.env.PORT}`);
});
