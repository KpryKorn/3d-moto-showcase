import React from "react";
import { useSnapCarousel } from "react-snap-carousel";

const Carousel = () => {
  const carouselData = [
    {
      city: "Berlin",
      descr:
        "Made in Germany, our bikes are top notch. Feel the power of the Kawasaki Racing Team and the thrill of riding such elegant bikes.",
    },
    {
      city: "Paris",
      descr:
        "Made in France, our bikes are top notch. Feel the power of the Kawasaki Racing Team and the thrill of riding such elegant bikes.",
    },
    {
      city: "Tokyo",
      descr:
        "Made in Japan, our bikes are top notch. Feel the power of the Kawasaki Racing Team and the thrill of riding such elegant bikes.",
    },
    {
      city: "Milan",
      descr:
        "Made in Italy, our bikes are top notch. Feel the power of the Kawasaki Racing Team and the thrill of riding such elegant bikes.",
    },
    {
      city: "Barcelona",
      descr:
        "Made in Spain, our bikes are top notch. Feel the power of the Kawasaki Racing Team and the thrill of riding such elegant bikes.",
    },
  ];

  const { scrollRef } = useSnapCarousel();
  return (
    <ul
      ref={scrollRef}
      style={{
        display: "flex",
        overflow: "auto",
        gap: "1rem",
        scrollSnapType: "x mandatory",
      }}
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="4"
    >
      {carouselData.map((item, i) => (
        <li
          style={{
            backgroundColor: "transparent",
            fontFamily: "var(--font-heading)",
            padding: "2rem",
            fontSize: "1.5rem",
            width: "350px",
            height: "350px",
            flexShrink: 0,
            color: "var(--clr-accent)",
            border: "2px solid var(--clr-accent)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
          key={i}
        >
          <p>
            <span>0{i + 1}. </span>
            {item.city}
          </p>
          <p
            className="showcase-subtitle"
            style={{
              fontSize: "1rem",
              textAlign: "left",
            }}
          >
            {item.descr}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Carousel;
