import React from "react";

export default function StorySection() {
  const motos = [
    {
      name: "Ninja 400",
      cm3: 400,
      year: 2018,
      color: "Green",
    },
    {
      name: "Ninja H2R",
      cm3: 1200,
      year: 2022,
      color: "Black",
    },
    {
      name: "Ninja ZX6R",
      cm3: 650,
      year: 2023,
      color: "Green",
    },
  ];

  return (
    <section id="our-story" className="container" data-scroll-section>
      <h3 className="section__title">
        <span>01. </span>Kawasaki <br />
        Motorcycles Unleashed
      </h3>
      <div className="group__gallery">
        {motos.map((moto) => {
          return (
            <div key={moto.name} className="group__gallery-item">
              <div className="grid-bg-2"></div>
              <div>
                <p className="moto-title">{moto.name}</p>
                <img
                  src="arrow-right-up-line.svg"
                  alt="arrow pointing up right"
                  height={32}
                  width={32}
                />
              </div>
              <p className="moto-infos">
                Built in <span>{moto.year}</span> by Kawasaki with power in
                mind, this <span>{moto.name}</span> comes in{" "}
                <span>{moto.color}</span> at <span>{moto.cm3}cc</span>.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
