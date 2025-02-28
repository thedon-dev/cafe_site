import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/IMG11.jpg";
import Slider from "../components/Slider";
import cocoa from "../assets/cocoa.png";
import SwiperComp from "../components/SwiperComp";

const HomePage = () => {
  return (
    <>
      <section
        className="pb-20 lg:pb-32 py-32 px-[5%] lg:px-[10%]"
        style={{
          backgroundImage: `linear-gradient(rgba(36, 12, 3, 0.9), rgba(36, 12, 3, 0.7)), url(${HeroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="2xl:container mx-auto text-white">
          <h1 className="text-[3rem] lg:text-[6.5rem] w-full lg:w-4/5">
            Enjoy Your Life With Coffee
          </h1>
          <p className="lg:text-lg mt-5 lg:w-1/2">
            Boost your productivity and build your mood with a short break in
            the most comfortable place. Boost your productivity and build your
            mood with a short.
          </p>
          <div className="mt-14">
            <Link to="/" className="bg-[#E19517] rounded px-7 py-3 text-lg">
              Explore More
            </Link>
          </div>
        </div>
      </section>
      <div className="">
        <Slider />
      </div>

      <section className="relative px-[5%] lg;px-[10%] pb-20 lg:pb-32 py-32">
        <div className="absolute left-0 top-0 lg:top-20">
          <img src={cocoa} alt="" className="w-[200px] lg:w-[500px] z-10" />
        </div>
        <div className="text-center text-[#240C03]">
          <h1 className="text-6xl lg:text-8xl z-40">We Provide </h1>
          <h3 className="text-3xl lg:text-5xl mt-1">
            Quality Coffee To Deliver
          </h3>
          <p className="text-sm lg:text-base lg:w-1/2 mx-auto mt-3">
            Boost your productivity and build your mood with a short break in
            the most comfortable place. Boost your productivity and build your
            mood with a short.
          </p>
        </div>
        <SwiperComp />
        {/* <SwiperComp2 /> */}
      </section>
    </>
  );
};

export default HomePage;
