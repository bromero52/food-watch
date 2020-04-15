import React, { Component } from "react";
import "../styles/Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">

        {/* LOGO  */}
        <a href="/" className="logo">
          logo
        </a>

        {/* NAV */}
        <ul className="main-nav" id="js-menu">
          <li>
            <a href="/" className="nav-links">
              Home
            </a>
          </li>

          <li>
            <a href="/products" className="nav-links">
              Products{" "}
            </a>
          </li>

          <li>
            <a href="/about" className="nav-links">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-links">
              Contact Us
            </a>
          </li>

          <li>
             <a href="/signup" className="nav-links">Sign Up</a>
          </li>
          <li>
            <a href="/Login" className="nav-links">
              Login
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
