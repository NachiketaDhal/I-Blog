const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      message: "Success",
      blogs,
    });
  } catch (err) {
    res.status(404).json({ message: "Failed to fetch data" });
  }
};

exports.findBlogById = async (req, res) => {
  try {
    const foundBlog = await Blog.findById(req.params.id);
    res.status(200).json({
      message: "Success",
      foundBlog,
    });
  } catch (err) {
    res.status(404).json({ message: "Failed to fetch data" });
  }
};

exports.addBlog = async (req, res) => {
  try {
    const newBlog = Blog.create(req.body);
    res.status(200).json({
      message: "Success",
    });
  } catch (err) {
    res.status(404).json({ message: "Failed to fetch data" });
  }
};
