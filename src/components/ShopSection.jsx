import React from "react";
import Carousel from "./ui/Carousel";

export default function ShopSection() {
  return (
    <section id="story-section" className="container" data-scroll-section>
      <h3 className="section__title">
        <span>03. </span>Our shops
      </h3>
      <Carousel />
    </section>
  );
}
