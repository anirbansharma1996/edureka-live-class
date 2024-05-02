const express = require("express");
const dotenv = require("dotenv");
const ConnectDB = require("./utils/database.js");
const AuthRoute = require("./router/auth.router.js");
const BlogRoute = require("./router/blog.router.js");

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", AuthRoute);
app.use("/api/v1", BlogRoute);

app.listen(process.env.PORT, () => {
  ConnectDB();
  console.log(`http://127.0.0.1:${process.env.PORT}`);
});
