import React from "react";

export default function NumberSection() {
  return (
    <section id="number-section" className="container" data-scroll-section>
      <div className="stats-wrap">
        <div
          className="stats-row"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="10"
        >
          <div className="stats-item">
            <h4 className="stats-header">10+</h4>
            <p>Years of innovation</p>
          </div>
          <div className="stats-item">
            <h4 className="stats-header">1.5M</h4>
            <p>Customers and users</p>
          </div>
          <div className="stats-item">
            <h4 className="stats-header">200+</h4>
            <p>Countries covered</p>
          </div>
        </div>
        <div
          className="stats-row"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-10"
        >
          <div className="stats-item">
            <h4 className="stats-header">40+</h4>
            <p>Motorcycles</p>
          </div>
          <div className="stats-item">
            <h4 className="stats-header">22</h4>
            <p>Pro Racers</p>
          </div>
          <div className="stats-item">
            <h4 className="stats-header">7</h4>
            <p>Creators</p>
          </div>
        </div>
      </div>
    </section>
  );
}
