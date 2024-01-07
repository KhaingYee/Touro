import React, { useState } from "react";
import "./Navbar.css";
import logoImg from "../../assets/images/travelLogo.jpg";
const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary container">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logoImg} alt="Description" className="headerLogo" /> Touro
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-md-5">
            <li
              className="nav-item position-relative"
              onClick={() => handleClick("home")}
            >
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
              <div className={activeItem === "home" ? "activeNav" : ""}></div>
            </li>
            <li
              className="nav-item position-relative"
              onClick={() => handleClick("category")}
            >
              <a className="nav-link" href="#">
                Category
              </a>
              <div
                className={activeItem === "category" ? "activeNav" : ""}
              ></div>
            </li>
            <li
              className="nav-item position-relative"
              onClick={() => handleClick("blog")}
            >
              <a className="nav-link" href="#">
                Blog
              </a>
              <div className={activeItem === "blog" ? "activeNav" : ""}></div>
            </li>
            <li
              className="nav-item position-relative"
              onClick={() => handleClick("about")}
            >
              <a className="nav-link" href="#">
                About Us
              </a>
              <div className={activeItem === "about" ? "activeNav" : ""}></div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-background" type="submit">
              LogIn
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
