const express = require("express");
const {
  postBlog,
  getBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog.controller.js");

const route = express()

route.get('/blogs',getBlog)
route.get('/blog/:id',getSingleBlog)
route.post('/blogs',postBlog)
route.put("/blog/:id",updateBlog)
route.delete("/blog/:id",deleteBlog)

module.exports = route

