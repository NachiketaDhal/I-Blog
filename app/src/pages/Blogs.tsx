import React from "react";
import PathStripe from "../components/PathStripe";

import { blogData } from "../data";
import { IBlog } from "../interfaces";
import Blog from "./Blog";
import "./blogs.css";

const Blogs = () => {
  return (
    <React.Fragment>
      <PathStripe path="blogs" />
      <section className="blogs-section">
        {blogData.map((bd: IBlog, i) => {
          return (
            <Blog
              id={bd.id}
              imgSrc={bd.imageSrc}
              title={bd.title}
              description={bd.description}
              keywords={bd.keywords}
              key={i}
            />
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default Blogs;
