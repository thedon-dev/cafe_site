import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/IMG11.jpg";
import Slider from "../components/Slider";

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
    </>
  );
};

export default HomePage;
