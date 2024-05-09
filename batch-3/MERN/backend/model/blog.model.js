const { Schema, model } = require("mongoose");

const BlogSchema = new Schema({
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
    ref: "blog-auth",
    required: true,
  },
  image: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
});
const Blog = new model("blog-blogs", BlogSchema);
module.exports = Blog;
