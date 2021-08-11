import React from "react";
import { Link } from "react-router-dom";

function Jumbotron({ children }) {
  return (
    <div className="hero">
      <div className="hero-body"> 
        <h1> Made With <br></br> Love & Care</h1>
        <button className="hero-btn">
          <Link to="/menu">
            Order Online
          </Link>
        </button>
        <p>or call us at 888-888-8888</p>
      </div>
      {children}
    </div>
  );
}

export default Jumbotron;
