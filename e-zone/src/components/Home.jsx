import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/hero-bg.png" className="card-img" alt="Background" />
      </div>
      <Products/>
    </div>
  );
};

export default Home;
