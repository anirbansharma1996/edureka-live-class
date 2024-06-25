const { SignUp, Login, Users } = require("../controller/user.controller.js");
const express = require("express");
const route = express();

route.post("/signup", SignUp);
route.post("/login", Login);
route.get("/users", Users);

module.exports = route;
