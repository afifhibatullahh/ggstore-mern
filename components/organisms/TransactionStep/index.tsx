import React from "react";
import StepItem from "../../molecules/StepItem";

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem
            icon="step1"
            text2="yang ingin kamu top up"
            text1="Pilih salah satu game"
            title="1. Start"
          />
          <StepItem
            icon="step2"
            text2="nominal yang sudah tersedia"
            text1="Top up sesuai dengan"
            title="2. Fill Up"
          />
          <StepItem
            icon="step2"
            text2="improve permainan kamu"
            text1="Siap digunakan untuk"
            title="3. Be a Winner"
          />
        </div>
      </div>
    </section>
  );
}
