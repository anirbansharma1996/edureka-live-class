const express = require("express");
const {
  getAllBlogs,
  getSingleBlog,
  postBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog.controller.js");
const auththentication = require("../middleware/auth.middleware.js");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// config multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // const uploadDir = path.join(
    //   __dirname,
    //   "..",
    //   "..",
    //   "frontend",
    //   "public",
    //   "uploads"
    // );
    const uploadDir = path.join(__dirname ,"..","uploads")
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

router.get("/blogs", getAllBlogs);
router.get("/blog/:id", getSingleBlog);
router.post("/blog", auththentication, upload.single("image"), postBlog);
router.put("/blog/:id", auththentication, updateBlog);
router.delete("/blog/:id", auththentication, deleteBlog);

module.exports = router;
