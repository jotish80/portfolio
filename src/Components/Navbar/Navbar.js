import React from "react";

const Navbar = () => {
  return (
    <div class="" style={{ backgroundColor: "#4E54C8" }}>
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="container text-uppercase p-2">
          <a class="navbar-brand font-weight-bold text-white" href="#me">
            JOTISH
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon bg-light"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link text-white mb-5" href="#about">
                  About<span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white" href="#blogs">
                  Blogs
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white" href="#contact">
                  Contact Me
                </a>
              </li>
              <li class="header-buttons">
                <a href="https://drive.google.com/file/d/1Tud0J8jD-KE1ZVaWDBtVaC5TfAN9kISs/view?usp=sharing">
                  <button class="btn btn-outline-light">Download CV</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
