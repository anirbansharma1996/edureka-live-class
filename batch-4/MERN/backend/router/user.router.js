const {
  Signup,
  Login,
  GetAllUser,
  DeleteUser,
  UpdateUser
} = require("../controller/user.controller.js");
const express = require("express");

const router = express.Router();

router.get("/", GetAllUser);
router.post("/signup", Signup);
router.post("/login", Login);
router.delete("/user/:id", DeleteUser);
router.put("/user/:id", UpdateUser);

module.exports = router;
