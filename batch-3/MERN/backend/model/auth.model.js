const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  image: { type: String },
  sub: { type: String },
});

const User = new model("blog-auth", UserSchema);
module.exports = User;
