import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Portfolio</div>
        <span>Toogle</span>
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experiance</li>
            <li>Testimonials</li>
          </ul>
        </div>
          <div className="button">
            <button className="btn">Contact Us</button>
          </div>
      </div>
    </div>
  );
}
