import React from "react";
import { TiMediaFastForward } from "react-icons/ti";
import bg_image from "../assets/FooterImage.png";
import { PiClockAfternoonBold } from "react-icons/pi";
import { BsCompass, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";

const Footer: React.FC = () => {
  return (
    <footer
      className="pb-10 py-20 px-[5%] lg:px-[10%]"
      style={{
        backgroundImage: `linear-gradient(rgba(36, 12, 3, 0.8), rgba(36, 12, 3, 0.8)), url(${bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="2xl:container mx-auto ">
        <h1 className="text-3xl lg:text-6xl text-center text-white">
          You can't buy happiness, but you can buy coffee, and that's pretty
          close.
        </h1>
        <div className="rounded-lg border gap-8 lg:h-[10rem] border-[#E19517] p-5 lg:p-10 mt-10 text-white flex flex-col lg:flex-row justify-around">
          <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
            <PiClockAfternoonBold size={50} color="#E19517" />
            <div className="text-xs">
              <h4>Our Opening Time</h4>
              <h6>11:00am - 7:00pm</h6>
            </div>
          </div>
          <div className="flex gap-3 py-5 lg:py-0 justify-center items-center border-t lg:border-l border-b lg:border-r border-[#E19517] px-8 lg:px-20">
            <div className="rounded-full h-fit p-2 border border-[#E19517]">
              <FaFacebookF />
            </div>
            <div className="rounded-full h-fit p-2  border border-[#E19517]">
              <FaInstagram />
            </div>
            <div className="rounded-full h-fit p-2  border border-[#E19517]">
              <LiaLinkedinIn />
            </div>
            <div className="rounded-full h-fit p-2  border border-[#E19517]">
              <BsTwitterX />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-2 items-center justify-center">
            <BsCompass size={50} color="#E19517" />
            <div className="text-xs">
              <h4>Our Opening Time</h4>
              <h6>11:00am - 7:00pm</h6>
            </div>
          </div>
        </div>
        <p className="text-sm text-center text-white mt-10">
          © Copyright 2021, All Rights Reserved by Coffee Time
        </p>
      </div>
    </footer>
  );
};

export default Footer;
