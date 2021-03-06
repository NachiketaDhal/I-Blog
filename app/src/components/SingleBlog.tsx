import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import Styled from "styled-components";

// import { blogData } from "../data";
import { IBlog } from "../interfaces";
import Button from "./Button";
import Comments from "./Comments";
import Loading from "./Loading";
import PathStripe from "./PathStripe";
import Alert from "./Alert";
import "./singleBlog.css";

const SingleBlog = () => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<IBlog | undefined>();
  const [calert, setCalert] = useState(false);

  const { id } = useParams<any>();
  // console.log(id);
  const history = useHistory();
  const url =
    "https://iblog-assignment.herokuapp.com" || "http://localhost:8000";

  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      const fetchedBlog = await axios.get(`${url}/api/blog/${id}`);
      // console.log(fetchedBlog.data.foundBlog);

      setBlog(fetchedBlog.data.foundBlog);
      setLoading(false);
    } catch (err) {
      alert("Something went wrong");
      history.push("/blogs");
    }
  };

  const deleteBlogPost = async () => {
    try {
      if (!window.confirm("Are you sure to delete this?")) {
        return;
      }
      await axios.delete(`${url}/api/blog/${id}`);
      setCalert(true);
      setTimeout(() => {
        history.push("/blogs");
      }, 2500);
    } catch (error) {
      alert("Failed to delete");
    }
  };

  useEffect(() => {
    fetchBlogPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCalert(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, [calert]);

  if (loading) {
    return (
      <div>
        <PathStripe path={id} singleBlog />
        <Loading />
      </div>
    );
  }

  return (
    <React.Fragment>
      {calert && <Alert color="red" message="Post deleted successfully" />}
      <div className="path-stripe">
        <PathStripe path={id} singleBlog />
      </div>
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
        <div className="buttons-container">
          <Link to="/blogs">
            <Button text="Go back to All Blogs" />
          </Link>
          <button onClick={deleteBlogPost}>Delete this blog</button>
        </div>
        <div>
          <Comments pComments={blog?.comments} />
        </div>
      </Container>
    </React.Fragment>
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
  .buttons-container {
    display: flex;
    justify-content: space-between;
    button {
    padding: 10px 8px;
    background-color: #323232;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
    border-color: transparent;
    transition: all .3s ease-in-out;
    :hover {
      background-color: transparent;
      border-color: #000000;
      color: #000000;
    }
    }
  }

  @media (max-width: 600px) {
    margin: 50px auto;
    .blog-heading {
      h1 {
        font-size: 24px;
      }
    }
    .hero-img {
      img {
        width: 100%;
      }
    }
    .blog-content {
      padding:  0;
    }
    .buttons-container {
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
  }
`;

export default SingleBlog;
