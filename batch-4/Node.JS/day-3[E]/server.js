const express = require("express");
const server = express();
const path = require("path");
const PORT = 8008;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(express.static(path.join(__dirname, "public")));

server.get("/", (req, res) => {
  res.send("server running");
});
server.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
server.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`http://127.0.0.1:${PORT}`);
});
