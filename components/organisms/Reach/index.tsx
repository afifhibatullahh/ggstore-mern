import React from "react";
import VerticalLine from "../../atoms/VerticalLine";
import ReachItem from "./ReachItem";

export default function Reach() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachItem title="290M+" desc="Players Top Up" />
          <VerticalLine />
          <ReachItem title="12.500" desc="Games Available" />
          <VerticalLine />
          <ReachItem title="99,9%" desc="Happy Players" />
          <VerticalLine />
          <ReachItem title="4.7" desc="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
