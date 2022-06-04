import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-primary py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="##">
            E-ZONE
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="##">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="##">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="##">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="##">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="buttons">
              <a href="#3" className="btn btn-outline-light"> 
              <i className="fa fa-sign-in me-1"></i>  Login</a>

              <a href="#3" className="btn btn-outline-light ms-2"> 
              <i className="fa fa-user-plus me-1"></i>  Signup</a>

              <a href="#3" className="btn btn-outline-light ms-2"> 
              <i className="fa fa-cart-arrow-down me-1"></i>  Cart (0)</a>
            </div>
            
            {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
