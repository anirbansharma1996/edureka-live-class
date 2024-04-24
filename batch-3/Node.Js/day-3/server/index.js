const express = require("express");
const UserPath = require("./router/test.router.js");
const PORT = 8080;

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use("/api/v1", UserPath);


server.listen(PORT, (err) => {
  if (err) throw new Error();
  console.log(`http://127.0.0.1:${PORT}`);
});
