const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./utils/db.js");
const UserRouter = require("./router/user.router.js");
const BlogRoute = require("./router/blog.router.js");

const app = express();

dotenv.config();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", UserRouter);
app.use("/api", BlogRoute);

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw err;
  }
  connectDB();
  console.log(`http://127.0.0.1:${process.env.PORT}`);
});
