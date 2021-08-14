import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styled from "styled-components";

import { blogData } from "../data";
import { IBlog } from "../interfaces";
import Comments from "./Comments";

const SingleBlog = () => {
  const [blog, setBlog] = useState<IBlog | undefined>();
  const [content, setContent] = useState<string[] | undefined>(["loading"]);

  const { id } = useParams<any>();
  // console.log(id);

  const fetchBlogPost = (id: number) => {
    const fetchedBlog = blogData.filter((b) => b.id === id);
    console.log(fetchedBlog);

    setBlog(fetchedBlog[0]);
  };

  const configureContent = () => {
    const contentArray = blog?.content.split(".");
    setContent(contentArray);
    console.log(contentArray);
  };

  useEffect(() => {
    fetchBlogPost(Number(id));
    configureContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, blog]);

  return (
    <Container>
      <div className="blog-heading">
        <h1>{blog?.title}</h1>
      </div>
      <div className="hero-img">
        <img src={blog?.imageSrc} alt="blog-img" />
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
        {content?.map((c, i) => {
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
        <Comments blog={blog} />
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
    /* margin: 0 auto; */
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
