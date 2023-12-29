import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="sidebar">
        {/* Add your dashboard component here */}
        <div className="dashboard">Dashboard</div>
        {/* Add your login component here */}
        <div className="login">Login</div>
      </div>
    </header>
  );
};

export default Navbar;
