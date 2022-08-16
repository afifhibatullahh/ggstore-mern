import Image from "next/image";
import React from "react";
import StoryDesc from "./StoryDesc";

export default function Story() {
  return (
    <section className="story pt-50 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <div
            className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60"
            data-aos="zoom-in"
          >
            <Image
              src="/img/Header-9.png"
              width={612}
              height={452}
              className="img-fluid"
              alt=""
            />
          </div>
          <StoryDesc />
        </div>
      </div>
    </section>
  );
}
