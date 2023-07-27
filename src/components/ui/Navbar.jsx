import React from "react";

export default function Navbar() {
  return (
    <nav className="container">
      <div id="logo">
        ExoRide<span>.</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">
            <span>01.</span>Our story
          </a>
        </li>
        <li>
          <a href="#">
            <span>02.</span>Showcase
          </a>
        </li>
        <a href="#" className="btn">
          Reach Out
        </a>
      </ul>
    </nav>
  );
}
