import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { IBlog } from "../interfaces";
import Blog from "./Blog";
import Loading from "../components/Loading";
import Button from "../components/Button";
import PathStripe from "../components/PathStripe";
import "./blogs.css";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const fetchedBlogs = await axios.get("http://localhost:8000/api/blogs");
      setBlogData(fetchedBlogs.data.blogs);
      setLoading(false);
      // console.log(fetchedBlogs);
    } catch (error) {
      alert("Failed to fetch blogs");
      history.push("/");
    }
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div>
        <PathStripe path="blogs" />
        <Loading />;
      </div>
    );
  }

  return (
    <React.Fragment>
      <PathStripe path="blogs" />
      <section className="blogs-section">
        {blogData.map((bd: IBlog, i) => {
          return (
            <Blog
              id={bd._id}
              imgSrc={
                bd.imageSrc ||
                "https://images.pexels.com/photos/5022456/pexels-photo-5022456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }
              title={bd.title}
              description={bd.description}
              keywords={
                bd.keywords.length > 0
                  ? bd.keywords
                  : ["lorem", "ipsum", "lorem-ipsum"]
              }
              key={i}
            />
          );
        })}
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "80px",
        }}
      >
        <Link to="blog/create">
          <Button text="Create a new blog" />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Blogs;
