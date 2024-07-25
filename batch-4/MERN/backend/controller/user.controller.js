const User = require("../model/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config();

const GetAllUser = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(503).json(error.message);
  }
};

const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isUser = await User.findOne({ email });
    if (isUser) {
      return res.status(404).json("email id already exists");
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashpassword });
    await user.save();
    res.status(201).json("signed up successfuly");
  } catch (error) {
    return res.status(503).json(error.message);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUser = await User.findOne({ email });
    if (!isUser) {
      return res.status(404).json("you need to signup first");
    }
    const match_password = await bcrypt.compare(password, isUser.password);
    if (!match_password) {
      return res.status(400).json("invalid password");
    }
    const token = jwt.sign(
      {
        id: isUser._id,
        username: isUser.name,
        useremail: isUser.email,
        exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60,
      },
      process.env.JWT_SECRET
      // { expiresIn: "7days" }
    );

    return res.status(200).json({ message: "login success", authtoken: token });
  } catch (error) {
    return res.status(503).json(error.message);
  }
};

const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const isSameUser = req.user.userid;
    if (!isSameUser) {
      return res.status(404).json("invalid user");
    }

    if (id !== isSameUser) {
      return res.status(404).json("unauthorized");
    }
    const isPresent = await User.findOne({ _id: id });
    if (!isPresent) {
      return res.status(404).json("user doesn't exist");
    }
    //await User.findByIdAndDelete({ _id: id });
    await User.deleteOne({ _id: id });
    return res.status(200).json("successfully deleted");
  } catch (error) {
    return res.status(503).json(error.message);
  }
};

const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const isPresent = await User.findOne({ _id: id });
    if (!isPresent) {
      return res.status(404).json("user doesn't exist");
    }
    const isSameUser = req.user.userid;
    if (!isSameUser) {
      return res.status(404).json("invalid user");
    }

    if (id !== isSameUser) {
      return res.status(404).json("unauthorized");
    }
    const updateduser = await User.updateOne(
      { _id: id },
      { $set: { name: name, email: email } }
    );
    if (!updateduser) {
      return res.status(404).json("something went wrong / invalid input");
    }
    return res.status(200).json("user updated successfully");
  } catch (error) {
    return res.status(503).json(error.message);
  }
};

const ForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const isUser = await User.findOne({ email });

    if (!isUser) {
      return res.status(404).json({ message: "user not found" });
    }
    const secret = process.env.NODEMAILER_SECRET + isUser.password;
    const token = jwt.sign({ email: isUser.email, id: isUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `${process.env.SERVER}:${process.env.PORT}/api/reset-password/${isUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "anirbansharma36@gmail.com",
        pass: "kmbr sqmi fbhz xjun",
      },
    });
    var mailoptions = {
      from: "anirbansharma36@gmail.com",
      to: email,
      subject: "Password Reset Request",
      text: `hello ${isUser.name} \n Click the link below , to reset your password \n ${link} \n NOTE : the link will exprire within 5 mins`,
    };
    transporter.sendMail(mailoptions, function (error, info) {
      if (error) {
        res.json({ error: error });
      } else {
        res.json({ "email sent": info.response });
      }
    });
  } catch (error) {
    res.status(503).json({ message: error.message });
  }
};

const ResetPasswordGet = async (req, res) => {
  try {
    const { id, token } = req.params;
    const isUser = await User.findOne({ _id: id });
    if (!isUser) {
      return res.status(404).json({ message: "invalid user" });
    }
    const secret = process.env.NODEMAILER_SECRET + isUser.password;
    const verify = jwt.verify(token, secret);
    if (verify) {
      res.render("index", { email: verify.email, status: "not verified" });
    }
  } catch (error) {
    res.status(503).json({ message: error.message });
  }
};

const ResetPasswordPost = async (req, res) => {
  try {
    const { id, token } = req.params;
    const { password } = req.body;
    const isUser = await User.findOne({ _id: id });
    if (!isUser) {
      return res.status(404).json({ message: "invalid user" });
    }
    const secret = process.env.NODEMAILER_SECRET + isUser.password;
    const verify = jwt.verify(token, secret);

    const newPassword = await bcrypt.hash(password, 10);
    await User.updateOne({ _id: id }, { $set: { password: newPassword } });
    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    return res.status(503).json({ message: error.message });
  }
};

module.exports = {
  Signup,
  Login,
  GetAllUser,
  DeleteUser,
  UpdateUser,
  ForgetPassword,
  ResetPasswordGet,
  ResetPasswordPost,
};

// https://myaccount.google.com/apppasswords
// Security > 2-Step Verification > ( scroll to bottom ) App Password >    enter app name & press create
