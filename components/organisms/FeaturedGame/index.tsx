import React from "react";
import GameItem from "../../molecules/GameItem";

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem thumbnail="1" title="Mecha" mode="Mobile" />
          <GameItem thumbnail="2" title="Call of Duty: Modern" mode="Mobile" />
          <GameItem thumbnail="3" title="Mobile Legends" mode="Mobile" />
          <GameItem thumbnail="4" title="Clash of Clans" mode="Mobile" />
          <GameItem thumbnail="5" title="Valorant" mode="Desktop" />
        </div>
      </div>
    </section>
  );
}
