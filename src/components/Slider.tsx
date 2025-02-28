import Marquee from "react-marquee-slider";
import React from "react";
import cocoa from "../assets/Bean.png";

const coffeeNames: string[] = [
  "Espresso",
  "Cappuccino",
  "Latte",
  "Mocha",
  "Americano",
  "Macchiato",
  "Flat White",
  "Affogato",
  "Cortado",
  "Irish Coffee",
];

const Slider: React.FC = () => {
  return (
    <div className="py-3 bg-[#E19517]">
      <Marquee
        velocity={12}
        resetAfterTries={200}
        scatterRandomly={false}
        direction="rtl"
        onInit={() => console.log("Marquee Initialized")}
        onFinish={() => console.log("Marquee Finished")}
      >
        {coffeeNames.map((name, index) => (
          <div key={index} className="text-black flex items-center gap-1">
            <img src={cocoa} alt="" className="w-[70px]" />
            <p className="text-3xl mx-7 text-white">{name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;
