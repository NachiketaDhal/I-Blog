import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Feature from "../components/Feature";

import Underline from "../components/Underline";
import { featuresData } from "../data";
import "./home.css";

const Home = () => {
  return (
    <main>
      <section className="hero-container">
        <div className="tagline">
          <h1>
            Stay <span className="colored-text">Informed</span> <br /> to
            Achieve Your <span className="colored-text"> Dreams</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link to="/blogs">
            <Button text="Explore the Blogs" />
          </Link>
        </div>
        <div className="hero-img-section">
          <img
            src="https://furnicart.netlify.app/static/media/hero-bcg.a876f19f.jpeg"
            alt="hero-img"
            className="hero-large-img"
          />
          <img
            src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="hero-small-img"
            className="hero-small-img"
          />
        </div>
      </section>
      <section className="feature-section">
        <div>
          <h2>Provided Features</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Underline />
          </div>
        </div>
        <div className="features">
          {featuresData.map((f, i) => (
            <Feature key={i} img={f.img} heading={f.heading} text={f.text} />
          ))}
        </div>
      </section>
      <section className="newsletter-section">
        <div className="newsletter-text">
          <h2>Join our newsletter to be informed</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore? sint unde quaerat ratione soluta veniam provident
            adipisci cumque eveniet tempore?
          </p>
        </div>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter Email" />
          <button>Subscribe</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
