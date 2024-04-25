const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
    },
  },
  { timestamps: true }
);

const blogModel = new model('blogs',blogSchema)
module.exports = blogModel

