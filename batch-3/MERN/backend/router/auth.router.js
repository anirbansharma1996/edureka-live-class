const { Signup, Login,ForgetPassword, ResetPassword,ResetPasswordPost } = require("../controller/auth.controller.js");
const express = require("express");

const router = express();

router.post("/signup", Signup);
router.post("/login", Login);
router.post('/reset-password',ForgetPassword)
router.get('/reset-password/:id/:token',ResetPassword)
router.post('/reset-password/:id/:token',ResetPasswordPost)

module.exports = router;
