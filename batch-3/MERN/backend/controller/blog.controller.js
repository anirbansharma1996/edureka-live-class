const Blog = require("../model/blog.model.js");
const path = require("path");

//READ -> GET
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "username");
    res.status(200).send(blogs);
  } catch (error) {
    res.status(503).send(error.message);
  }
};
const getUserBlog = async (req, res) => {
  try {
    const userid = req.params.id;
    const userblog = await Blog.find({ author: userid }).populate(
      "author",
      "username"
    );
    res.status(200).send(userblog);
  } catch (error) {
    res.status(503).send(error.message);
  }
};

//CREATE -> POST
const createBlog = async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const author = req.user.userId;
    if (!author) {
      return res.status(404).send("invalid user");
    }

    const blog = new Blog({
      title,
      content,
      author,
      image,
      date: new Date(),
    });
    await blog.save();
    res.status(201).send({ message: "Blog Posted Successfully" });
  } catch (error) {
    res.status(503).send(error.message);
  }
};

// UPDATE -> PUT/PATCH
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const userId = req.user.userId;
    if (!userId) {
      return res.status(404).send("invalid user");
    }
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).send({ message: "Blog not found" });
    }
    if (blog.author.toString() !== userId) {
      return res
        .status(403)
        .send({ error: "Unauthorized , You can only update your own Blogs" });
    }
    await Blog.findByIdAndUpdate(id, { title, content });
    res.status(201).send({ message: "Blog updated successfully" });
  } catch (error) {
    res.status(503).send(error.message);
  }
};

//DELETE -> DELETE
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).send({ message: "Blog not found" });
    }
    if (blog.author.toString() !== userId) {
      return res
        .status(403)
        .send({ error: "Unauthorized , You can only delete your own Blogs" });
    }
    await Blog.findByIdAndDelete(id);
    res.status(200).send({ message: "Blog deleted Successfully" });
  } catch (error) {
    res.status(503).send(error.message);
  }
};

module.exports = {
  getAllBlogs,
  getUserBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
