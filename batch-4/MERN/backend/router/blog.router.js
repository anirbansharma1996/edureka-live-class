const express = require("express");
const {
  getAllBlogs,
  getSingleBlog,
  postBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog.controller.js");
const auththentication = require("../middleware/auth.middleware.js");

const router = express.Router();

router.get("/blogs", getAllBlogs);
router.get("/blog/:id", getSingleBlog);
router.post("/blog", auththentication, postBlog);
router.put("/blog/:id", auththentication, updateBlog);
router.delete("/blog/:id", auththentication, deleteBlog);

module.exports = router;
