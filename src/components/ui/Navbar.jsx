import React from "react";

export default function Navbar() {
  return (
    <nav className="container" data-scroll-section>
      <div id="logo">
        <img src="/vite.png" alt="kawasaki river mark logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">
            <span>01.</span>Our bikes
          </a>
        </li>
        <li>
          <a href="#">
            <span>02.</span>Showcase
          </a>
        </li>
        <a href="#" className="btn btn-primary">
          Reach Out
        </a>
      </ul>
    </nav>
  );
}
