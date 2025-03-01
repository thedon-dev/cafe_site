import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/IMG11.jpg";
import Slider from "../components/Slider";
import cocoa from "../assets/cocoa.png";
import SwiperComp from "../components/SwiperComp";
import cocoa2 from "../assets/cocoa2.png";
import CoffeeShowcase from "../components/CoffeeShowcase";
import IMG3 from "../assets/IMG3.jpg";
import discount from "../assets/Discount.png";
import cocoaHeart from "../assets/cocoaHeart.png";
import Gallery from "../components/Gallery";

const HomePage: React.FC = () => {
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
            Boost your productivity and uplift your mood with a refreshing
            coffee break in the most comfortable and inviting space. Savor every
            sip, recharge, and let inspiration flow.
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
            Experience the perfect blend of rich flavors and cozy ambiance.
            Whether you're starting your day or taking a well-deserved break,
            our expertly crafted coffee is here to energize and inspire you.
          </p>
        </div>
        <SwiperComp />
      </section>
      <div className="">
        <Slider />
      </div>
      <section className="text-[#240C03]">
        <div className="relative 2xl:container mx-auto">
          <div className="absolute top-0 right-0 -z-20">
            <img src={cocoa2} alt="" className="w-[15rem] lg:w-full" />
          </div>
          <div className="py-32 px-[5%] lg:px-[10%]">
            <div className="2xl:container mx-auto">
              <h1 className="text-7xl lg:text-9xl">The Coffee </h1>
              <h3 className="text-5xl lg:text-7xl">We Work With</h3>
              <div className="flex flex-col lg:flex-row mt-5 lg:mt-10 justify-between">
                <p className="text-sm lg:text-lg">
                  Boost your productivity and build your mood with a short break
                  in the most comfortable place.{" "}
                </p>
                <button className="w-fit mt-3 lg:mt-0 border border-[#E19517] text-[#E19517] px-5 py-1 rounded">
                  See All
                </button>
              </div>
              <CoffeeShowcase />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative grid place-content-center py-24 lg:py-32 px-[5%] lg:px-[10%]"
        style={{
          backgroundImage: `linear-gradient(rgba(36, 12, 3, 0.8), rgba(36, 12, 3, 0.8)), url(${IMG3})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute -top-5 lg:-top-10 right-0 lg:right-32">
          <img src={discount} alt="" className="w-[150px] lg:w-[200px]" />
        </div>
        <div className="relative flex flex-col items-center 2xl:container mx-auto">
          <h1 className="text-6xl lg:text-9xl text-white">Coffee Time</h1>
          <button className="px-7 py-2 mt-5 lg:mt-2 text-white bg-[#E19517] rounded">
            Order Now
          </button>
        </div>
      </section>

      <section className="py-20 lg:py-32 px-[5%] lg:px-[10%]">
        <div className="2xl:container mx-auto justify-between">
          <div className="flex flex-row-reverse lg:flex-row gap-5 justify-between">
            <div>
              <img src={cocoaHeart} alt="" className="w-[10rem] lg:w-[15rem]" />
            </div>
            <div className="text-start lg:text-end text-[#240C03]">
              <h1 className="text-6xl lg:text-9xl">Our Shop</h1>
              <h3 className="text-4xl lg:text-7xl">Our Gallery</h3>
              <p className="text-sm lg:text-base mt-2 w-full lg:w-2/3 ms-auto">
                Boost your productivity and build your mood with a short break
                in the most comfortable place.{" "}
              </p>
            </div>
          </div>

          <Gallery />
        </div>
      </section>
    </>
  );
};

export default HomePage;
