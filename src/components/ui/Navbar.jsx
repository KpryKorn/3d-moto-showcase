import React from "react";

export default function Navbar() {
  return (
    <nav className="container" data-scroll-section>
      <div id="logo" data-animated-logo>
        <img src="/vite.png" alt="kawasaki river mark logo" />
      </div>
      <ul className="nav-links">
        <li data-animation-1>
          <a href="#">
            <span>01.</span>Our bikes
          </a>
        </li>
        <li data-animation-2>
          <a href="#">
            <span>02.</span>Showcase
          </a>
        </li>
        <li data-animation-3>
          <a href="#">
            <span>03.</span>Our shops
          </a>
        </li>
        <a href="#" className="btn btn-primary" data-animated-btn>
          Reach Out
        </a>
      </ul>
    </nav>
  );
}
