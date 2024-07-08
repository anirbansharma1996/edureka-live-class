const { Schema, model } = require("mongoose");

const BlogSchema = new Schema(
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
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    imgPath: {
      type: String
    },
    imageLink: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = new model("blog", BlogSchema);
module.exports = Blog;
