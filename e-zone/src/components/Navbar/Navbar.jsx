import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-primary py-3 shadow-sm">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4" href="##">
            E-ZONE
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="##">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="##">
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="##">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="##">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="buttons">
              <a href="#3" className="btn btn-outline-light"> 
              <i class="fa fa-sign-in me-1"></i>  Login</a>

              <a href="#3" className="btn btn-outline-light ms-2"> 
              <i class="fa fa-user-plus me-1"></i>  Signup</a>

              <a href="#3" className="btn btn-outline-light ms-2"> 
              <i class="fa fa-cart-arrow-down me-1"></i>  Cart (0)</a>
            </div>
            
            {/* <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
