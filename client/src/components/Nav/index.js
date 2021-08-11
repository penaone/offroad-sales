import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/story">
             Our Story
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/menu">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="nav-item">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          
        </ul>
      );
    } else {
      return (
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/story">
             Our Story
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/menu">
              Menu
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact">
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/signup">
              Signup
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header>

      <h1 className="nav-title">
        <Link to="/">
          Mamasita's Empanadas
          <br></br>
          <span className="header-small">The Queen of Empanadas.</span>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
