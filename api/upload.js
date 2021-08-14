require("dotenv").config();
const fs = require("fs");
const mongoose = require("mongoose");

const Blog = require("./models/Blog");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED 🔥"))
  .catch((err) => console.log(err));

const blogs = JSON.parse(fs.readFileSync("./data/blogs.json", "utf-8"));

const importData = async () => {
  try {
    await Blog.create(blogs);
    console.log("Data successfuly loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

importData();
