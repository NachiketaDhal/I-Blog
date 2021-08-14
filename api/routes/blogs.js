const router = require("express").Router();

const { getAllBlogs, findBlogById, addBlog } = require("../controllers/blogs");

router.get("/blogs", getAllBlogs);
router.get("/blog/:id", findBlogById);
router.post("/blog/create", addBlog);

module.exports = router;
