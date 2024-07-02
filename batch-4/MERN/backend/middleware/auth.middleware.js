const jwt = require("jsonwebtoken");
require("dotenv").config();

const auththentication = async (req, res,next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json("token not provided");
    }
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userid: decodeToken.id };
    next();
  } catch (error) {
    return res.status(505).json(error.message);
  }
};
module.exports = auththentication;
