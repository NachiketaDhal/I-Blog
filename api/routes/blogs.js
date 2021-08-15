const router = require("express").Router();

const {
  getAllBlogs,
  findBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogs");

router.get("/blogs", getAllBlogs);
router.get("/blog/:id", findBlogById);
router.post("/blog/create", addBlog);
router.put("/blog/:id", updateBlog);
router.delete("/blog/:id", deleteBlog);

module.exports = router;
