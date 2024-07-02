const {
  Signup,
  Login,
  GetAllUser,
  DeleteUser,
  UpdateUser
} = require("../controller/user.controller.js");
const express = require("express");
const auththentication = require("../middleware/auth.middleware.js");

const router = express.Router();

router.get("/", GetAllUser);
router.post("/signup", Signup);
router.post("/login", Login);
router.delete("/user/:id",auththentication, DeleteUser);
router.put("/user/:id",auththentication, UpdateUser);

module.exports = router;
