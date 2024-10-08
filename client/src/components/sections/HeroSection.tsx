import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex items-center justify-between flex-col gap-8 md:flex-row">
      <div>
        <div className="relative inline-block">
          <p className="font-bold text-[35px] md:text-[64px]  leading-tight md:leading-[4rem]">
            Buy Tickets with <br /> Confidence – Blockchain-Powered,
            <br />Scalper-Free Events!
          </p>

          <div className="hidden md:block absolute top-[-10rem] right-0 left-[-5rem] -z-10">
            <img src="/images/red_shape.png" height="400" width="1000" alt="red shape" />
          </div>
        </div>

        <div>
          <p className="text-gray-500 py-[24px]">
            Experience the future of ticketing with our <br />blockchain-powered platform.
            Say goodbye to scalpers and unfair pricing—enjoy secure,  <br />transparent access to tickets for concerts, movies, parties, and events, all in one place!
          </p>
        </div>
        <div className="flex gap-[20px] md:gap-[40px] flex-col md:flex-row">
          <MainButton
            text="Get Started"
            rightIconRoute="/images/right_arrow_icon.svg"
            rightIconClass="pl-[8px]"
            classes="font-bold"
          />

          <div className="flex gap-[14px] items-center hover:cursor-pointer">
            <div>
              <img src="/images/play_icon.svg" alt="play icon" />
            </div>
            <p>Watch Video</p>
          </div>
        </div>
      </div>
      <div className="my-[10rem]" >
        <img src="/images/hero.png" alt="hero" />
      </div>
    </section>
  );
}

export default HeroSection;
