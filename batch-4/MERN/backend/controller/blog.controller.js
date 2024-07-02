const Blog = require("../model/blog.model.js");

const getAllBlogs = async (req, res) => {
  try {
    const allposts = await Blog.find().populate("author", "name");
    return res.status(200).json(allposts);
  } catch (error) {
    return res.status(503).json(error.message);
  }
};
const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json("blog id not provided");
    }
    const post = await Blog.findOne({ _id: id }).populate("author", "name");
    if (!post) {
      return res.status(404).json("Blog not found");
    }
    return res.status(200).json(post);
  } catch (error) {
    return res.status(503).json(error.message);
  }
};
const postBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.user.userid;
    if (!author) {
      return res.status(404).json("invalid user");
    }
    const blog = new Blog({
      title,
      content,
      author,
      image: "",
      date: new Date(),
    });
    await blog.save();
    return res.status(201).json("blog posted successfully");
  } catch (error) {
    return res.status(503).json(error.message);
  }
};
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const author = req.user.userid;
    if (!author) {
      return res.status(404).json("invalid user");
    }
    const u_blog = await Blog.findById(id);
    if (!u_blog) {
      return res.status(404).json("blog not found");
    }
    if (u_blog.author.toString() !== author) {
      return res.status(404).json("Not Authorized ");
    }
    await Blog.findByIdAndUpdate(id, { title, content });
    res.status(201).json("blog updated");
  } catch (error) {
    return res.status(503).json(error.message);
  }
};
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const author = req.user.userid;
    if (!author) {
      return res.status(404).json("invalid user");
    }
    const d_blog = await Blog.findById(id);
    if (!d_blog) {
      return res.status(404).json("blog not found");
    }
    if (d_blog.author.toString() !== author) {
      return res.status(404).json("Not Authorized ");
    }
    await Blog.findByIdAndDelete(id);
    res.status(201).json("blog deleted");
  } catch (error) {
    return res.status(503).json(error.message);
  }
};

module.exports = {
  getAllBlogs,
  getSingleBlog,
  postBlog,
  updateBlog,
  deleteBlog,
};
