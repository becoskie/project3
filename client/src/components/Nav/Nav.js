/* Nav Bar being rendered on the page here*/
import React from "react";
// import "./Nav.css";


const Nav = () =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">
          After Class
        </a>
      <div>
        <span className="nav-Links">
          <a href="/" className="navbar-brand">
            Home
          </a>
          <a href="/" className="navbar-brand">
            About
          </a>
          <a href="/" className="navbar-brand">
            Projects
          </a>
          <a href="/" className="navbar-brand">
            Logout
          </a>
        </span>
      </div>
    </div>
  </nav>;

export default Nav;