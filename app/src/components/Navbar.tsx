import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ padding: "20px" }}
    >
      <Link className="navbar-brand" to="/" style={{ fontWeight: "bold" }}>
        I-BLOG
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/" exact>
            Home
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/blogs">
            Blog
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="active"
            to="/blog/create"
          >
            Create
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/contact">
            Contact
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/error">
            Error
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
