import React from "react";
import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state)=> state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-primary py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            E-ZONE
          </NavLink>
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
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-light"> 
              <i className="fa fa-sign-in me-1"></i>  Login</NavLink>

              <NavLink to="/register" className="btn btn-outline-light ms-2"> 
              <i className="fa fa-user-plus me-1"></i>  Signup</NavLink>

              <NavLink to="/cart" className="btn btn-outline-light ms-2"> 
              <i className="fa fa-cart-arrow-down me-1"></i>  Cart ({state.length})</NavLink>
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
