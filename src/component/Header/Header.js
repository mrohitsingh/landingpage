import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="brand">
        <h3>Logo</h3>
      </div>
      <div className="menu-btn">
        <div className="menu">
          <ul>
            <li>
              <a href="#"> Home</a>
            </li>
            <li>
              <a href="#">About-us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
          </ul>
        </div>
        <div className="btn">Contact</div>
      </div>
    </div>
  );
}

export default Header;
