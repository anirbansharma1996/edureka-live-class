const express = require("express");
const app = express();
const dotenv = require('dotenv')
const Math = require("./routes/math.route.js");
const Auth = require("./routes/user.route.js");


dotenv.config()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", Math);
app.use("/api/v1", Auth);

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`http://127.0.0.1:${process.env.PORT}`);
});
