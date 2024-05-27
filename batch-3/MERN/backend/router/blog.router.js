const express = require("express");
const {
  getAllBlogs,
  getUserBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog.controller.js");
const authentication = require("../middleware/auth.middleware.js");


const router = express();



router.get("/blogs", getAllBlogs);
router.get("/blog/user/:id", authentication, getUserBlog);
router.post("/blog", authentication, createBlog);
router.put("/blog/:id", authentication, updateBlog);
router.delete("/blog/:id", authentication, deleteBlog);

module.exports = router;
