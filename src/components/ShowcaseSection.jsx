import React from "react";

export default function ShowcaseSection() {
  return (
    <section id="showcase-section" className="container" data-scroll-section>
      <h3 className="section__title">
        <span>02. </span>Showcase
      </h3>
      <div className="split">
        <div
          style={{
            position: "relative",
          }}
        >
          <p
            className="showcase-text"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="5"
          >
            Embark on the Ride of Tomorrow's Dreams, Where Technology and
            Passion Collide. With Futuristic Motorcycles as Your Wings, Soar to
            New Horizons Unexplored. Feel the Electric Pulse of Innovation, as
            3D Technology Ignites Your Soul. In the Digital Winds, Embrace the
            Thrill, for the Future of Riding Has Arrived.
          </p>
        </div>
        <div className="showcase-subtitle">
          <p>Kawasaki Motorsport is a brand of Kawasaki.</p>
          <a href="#" className="btn btn-secondary">
            More about us
          </a>
        </div>
      </div>
    </section>
  );
}
