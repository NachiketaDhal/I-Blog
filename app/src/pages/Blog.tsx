import React from "react";
import { Link } from "react-router-dom";

import { IBlogProps } from "../interfaces";
import "./blog.css";

const Blog = ({ id, imgSrc, title, description, keywords }: IBlogProps) => {
  return (
    <React.Fragment>
      <main>
        <section className="single-blog-section">
          <div className="left-section">
            <img src={imgSrc} alt="blog-img" />
          </div>
          <div className="right-section">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="bottom">
              <div className="keywords">
                {keywords.map((k, i) => {
                  return (
                    <span key={i} className="keyword">
                      {k}
                    </span>
                  );
                })}
              </div>
              <Link to={`/blog/${id}`}>
                Read More <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
        <hr style={{ margin: "40px 0", borderTop: "1px solid #c1221c" }} />
      </main>
    </React.Fragment>
  );
};

export default Blog;
