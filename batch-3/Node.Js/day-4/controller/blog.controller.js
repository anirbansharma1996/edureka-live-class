const blogModel = require("../model/blog.model.js");

//Create
const postBlog = async (req, res) => {
  try {
    const { title, content, author, tag } = req.body;

    const newBlog = new blogModel({ title, content, author, tag });
    if (!newBlog) {
      return res.status(404).send("something went wrong...");
    }
    await newBlog.save();
    res.status(201).send("your blog hasbeen posted");
  } catch (error) {
    res.status(503).send(error.message);
  }
};

//Read
const getBlog = async (req, res) => {
  try {
    const allBlogs = await blogModel.find();
    if (!allBlogs) {
      return res.status(404).send("something went wrong...");
    }
    res.status(200).send(allBlogs);
  } catch (error) {
    res.status(503).send(error.message);
  }
};

//solo Read
const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if(!id){
        return res.status(404).send('invalid id...')
    }
    const singleBlog = await blogModel.findById(id);
    if (!singleBlog) {
      return res.status(404).send(`no blogs found with ${id}...`);
    }
    res.status(200).send(singleBlog);
  } catch (error) {
    res.status(503).send(error.message);
  }
};

//Update
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { content,title } = req.body;
    if (!id || !content || !title) {
      return res.status(404).send("invalid data...");
    }
    const updatedBlog = await blogModel.findByIdAndUpdate(
      id,
      { content,title },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).send("something went wrong...");
    }
    res.status(201).send(`Blog with id : ${id} hasbeen updated successfuly`);
  } catch (error) {
    res.status(503).send(error.message);
  }
};

//Delete
const deleteBlog = async (req, res) => {
  try {
    const {id} = req.params
     if(!id){
        return res.status(404).send('invalid id...')
     }
    const deletedBlog = await blogModel.findByIdAndDelete(id)
    if(!deletedBlog){
        return res.status(404).send("something went wrong...");
    }
    res.status(200).send(`Blog with id : ${id} hasbeen deleted successfuly`)
  } catch (error) {
    res.status(503).send(error.message);
  }
};

module.exports = { postBlog, getBlog, getSingleBlog, updateBlog, deleteBlog };
