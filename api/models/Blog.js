const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: false,
    },
    comments: {
      type: Array,
      required: false,
    },
    keywords: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
