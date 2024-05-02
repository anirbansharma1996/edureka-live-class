const User = require("../model/auth.model.js");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

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
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );
    if (!token) {
      return res.status(403).send("can not generate token ");
    }
    res.status(200).send({ message: "Login success", token: token });
  } catch (error) {
    res.status(503).send(error.message);
  }
};

module.exports = { Signup, Login };
