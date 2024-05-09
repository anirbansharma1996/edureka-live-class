const express = require("express");
const {
  getAllBlogs,
  getUserBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog.controller.js");
const authentication = require("../middleware/auth.middleware.js");
const multer = require("multer");
const path = require("path");

const router = express();

// multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(
      __dirname,
      "..",
      "..",
      "frontend",
      "public",
      "upload"
    );
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

router.get("/blogs", getAllBlogs);
router.get("/blog/user/:id", authentication, getUserBlog);
router.post("/blog", authentication, upload.single("image"), createBlog);
router.put("/blog/:id", authentication, updateBlog);
router.delete("/blog/:id", authentication, deleteBlog);

module.exports = router;
