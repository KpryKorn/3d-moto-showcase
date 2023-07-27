import React from "react";

export default function Hero() {
  return (
    <main className="container">
      <div>
        <p className="hero__subtitle">
          Experience Speed in a New Dimension: ExoRide Motorcycles Unleashed.
          <br />
          Are you ready to experience the thrill?
        </p>
      </div>
      <div>
        <h1 className="hero__title">
          Redefining <br /> Speed.
        </h1>
      </div>
      <div className="hero__labels">
        <p>
          Self-owned and independent • <span>10+</span> years of innovation •{" "}
          <span>130+</span> partners
        </p>
        <a href="#" className="btn btn-secondary">
          Join us
        </a>
      </div>
    </main>
  );
}
