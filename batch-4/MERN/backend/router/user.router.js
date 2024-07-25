const {
  Signup,
  Login,
  GetAllUser,
  DeleteUser,
  UpdateUser,
  ForgetPassword,
  ResetPasswordGet,
  ResetPasswordPost,
} = require("../controller/user.controller.js");
const express = require("express");
const auththentication = require("../middleware/auth.middleware.js");

const router = express.Router();

router.get("/", GetAllUser);
router.post("/signup", Signup);
router.post("/login", Login);
router.delete("/user/:id", auththentication, DeleteUser);
router.put("/user/:id", auththentication, UpdateUser);
router.post("/reset-password", ForgetPassword);
router.get("/reset-password/:id/:token", ResetPasswordGet);
router.post("/reset-password/:id/:token", ResetPasswordPost);

module.exports = router;
