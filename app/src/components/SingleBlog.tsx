import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Styled from "styled-components";

// import { blogData } from "../data";
import { IBlog } from "../interfaces";
import Button from "./Button";
import Comments from "./Comments";
import Loading from "./Loading";

const SingleBlog = () => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<IBlog | undefined>();

  const { id } = useParams<any>();
  // console.log(id);

  const fetchBlogPost = async () => {
    setLoading(true);
    const fetchedBlog = await axios.get(`http://localhost:8000/api/blog/${id}`);
    // console.log(fetchedBlog.data.foundBlog);

    setBlog(fetchedBlog.data.foundBlog);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <div className="blog-heading">
        <h1>{blog?.title}</h1>
      </div>
      <div className="hero-img">
        <img
          src={
            blog?.imageSrc ||
            "https://images.pexels.com/photos/5022456/pexels-photo-5022456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          alt="blog-img"
        />
      </div>
      <div className="keywords">
        {blog?.keywords.map((k, i) => {
          return (
            <span key={i} className="keyword">
              {k}
            </span>
          );
        })}
      </div>
      <div className="blog-content">
        {blog?.content.split(".")?.map((c, i) => {
          return (
            <p key={i} style={{ textAlign: "justify" }}>
              <span style={{ fontSize: "22px", color: "#c1221c" }}>
                &ldquo;
              </span>
              {`${c} `}
              <span style={{ fontSize: "22px", color: "#c1221c" }}>
                &rdquo;
              </span>
            </p>
          );
        })}
      </div>
      <div>
        <Link to="/blogs">
          <Button text="Go back to All Blogs" />
        </Link>
      </div>
      <div>
        <Comments pComments={blog?.comments} />
      </div>
    </Container>
  );
};

const Container = Styled.section`
  width: 80%;
  margin: 80px auto;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .blog-heading {
    text-align: center;
  }
  .hero-img {
    display: flex;
    justify-content: center;
    img {
      width: 700px;
    }
  }
  .keywords {
    display: flex;
    justify-content: center;
  }
  .blog-content {
    padding: 20px 40px;
    border-bottom: 1px solid #c1221c;
  }
`;

export default SingleBlog;
