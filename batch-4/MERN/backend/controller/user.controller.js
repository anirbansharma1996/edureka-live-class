const User = require("../model/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    const updateduser = await User.updateOne(
      { _id: id },
      { $set: {name: name , email: email  } }
    );
    if (!updateduser) {
      return res.status(404).json("something went wrong / invalid input");
    }
    return res.status(200).json("user updated successfully");
  } catch (error) {
    return res.status(503).json(error.message);
  }
};

module.exports = { Signup, Login, GetAllUser, DeleteUser, UpdateUser };
