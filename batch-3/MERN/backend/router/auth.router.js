const { Signup, Login } = require("../controller/auth.controller.js");
const express = require("express");

const router = express();

router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
