require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const blogsRoute = require("./routes/blogs");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", blogsRoute);

const port = 8000;

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED 🔥"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server running at port ${port}...`));
