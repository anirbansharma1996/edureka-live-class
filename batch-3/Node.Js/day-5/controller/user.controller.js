const User = require("../model/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// temp dummy path to get all the users
const getAll = async (req, res) => {
  try {
    let data = await User.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(503).send(error.message);
  }
};

const Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const isExisting = await User.findOne({ email });

    if (isExisting) {
      return res.status(404).send("user already exists");
    }
    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashpassword });
    if (newUser) {
      await newUser.save();
      res.status(201).send("Signup successful");
    }
  } catch (error) {
    res.status(503).send(error.message);
  }
};
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isExisting = await User.findOne({ email });

    if (!isExisting) {
      return res.status(404).send("signup first");
    }
    // compare the password
    const checkPassword = await bcrypt.compare(password, isExisting.password);

    if (!checkPassword) {
      return res.status(404).send("Invalid password");
    }

    const token = jwt.sign(
      {
        id: isExisting._id,
        name: isExisting.username,
        email: isExisting.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).send({message:"Login success",token:token});
  } catch (error) {
    res.status(503).send(error.message);
  }
};

module.exports = { Signup, Login, getAll };
