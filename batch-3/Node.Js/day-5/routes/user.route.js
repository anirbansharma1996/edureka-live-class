const express = require("express");
const { Signup, Login, getAll } = require("../controller/user.controller.js");

const route = express();

route.get("/", getAll);
route.post("/signup", Signup);
route.post("/login",Login)

module.exports = route;
