const User = require("../model/auth.model.js");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

dotenv.config();

const Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const isAlreadyUser = await User.findOne({ email });

    if (isAlreadyUser) {
      return res.status(400).send("user already exists...");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashPassword });
    await user.save();
    res.status(201).send("signup successfull");
  } catch (error) {
    res.status(503).send(error.message);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isPresentUser = await User.findOne({ email });

    if (!isPresentUser) {
      return res.status(400).send("you need to signup first");
    }
    const match_password = await bcrypt.compare(
      password,
      isPresentUser.password
    );
    if (!match_password) {
      return res.status(400).send("invalid password...");
    }

    const token = jwt.sign(
      {
        id: isPresentUser._id,
        name: isPresentUser.username,
        email: isPresentUser.email,
        exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60,
      },
      process.env.JWT_SECRET_KEY
    );
    if (!token) {
      return res.status(403).send("can not generate token ");
    }
    res.status(200).send({ message: "Login success", token: token });
  } catch (error) {
    res.status(503).send(error.message);
  }
};

const ForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const isUser = await User.findOne({ email });
    if (!isUser) {
      return res.status(404).send("user does not exist...");
    }

    const secret = process.env.FORGET_PASSKEY + isUser.password;
    const token = jwt.sign({ email: isUser.email, id: isUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://127.0.0.1:8080/api/v1/reset-password/${isUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_AUTH_USER,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    var mailoptions = {
      from: "anirbansharma36@gmail.com",
      to: email,
      subject: "Password Reset",
      text: `Hello user , click the below link to reset your password within 5 min \n\n ${link}`,
    };
    transporter.sendMail(mailoptions, function (error, info) {
      if (error) {
        return res.send(error);
      } else {
        return res.send({ "email sent": info.response });
      }
    });
  } catch (error) {
    res.status(503).send(error.message);
  }
};

const ResetPassword = async (req, res) => {
  try {
    const { id, token } = req.params;
    const isUser = await User.findOne({ _id: id });
    if (!isUser) {
      return res.status(404).send("User not found");
    }
    const checkSecret =  process.env.FORGET_PASSKEY + isUser.password;
    const verify = jwt.verify(token, checkSecret);
    if (verify) {
      return res.render("index", {
        email: verify.email,
        status: "not verified",
      });
    } else {
      return res.status(404).send("something went wrong , try again later ...");
    }
  } catch (error) {
    return res.status(503).send(error.message);
  }
};

const ResetPasswordPost = async (req, res) => {
  try {
    const { id, token } = req.params;
    const { password } = req.body;

    const isUser = await User.findOne({ _id: id });
    if (!isUser) {
      return res.status(404).send("user does not exist");
    }
    const secret = process.env.FORGET_PASSKEY + isUser.password;
    const verify = jwt.verify(token, secret);
    const newPassword = await bcrypt.hash(password, 10);

    await User.updateOne({ _id: id }, { $set: { password: newPassword } });
    return res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    res.status(503).send(error.message);
  }
};

module.exports = {
  Signup,
  Login,
  ForgetPassword,
  ResetPassword,
  ResetPasswordPost,
};
