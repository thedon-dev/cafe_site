import React from "react";
import IMG1 from "../assets/IMG1.jpg";
import IMG2 from "../assets/IMG10.jpg";
import IMG3 from "../assets/IMG11.jpg";
import IMG4 from "../assets/IMG7.jpg";

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 lg:grid-rows-2 gap-5 h-[40rem] mt-10">
      <div
        className="col-span-4 lg:col-span-2 row-span-1 rounded-lg"
        style={{
          backgroundImage: `url(${IMG1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <img src={IMG1} alt="" className="object-cover" /> */}
      </div>
      <div
        className="col-span-2 row-span-1 lg:row-span-2 rounded-lg"
        style={{
          backgroundImage: `url(${IMG2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <img src={IMG2} alt="" className="object-cover" /> */}
      </div>
      <div
        className="col-span-2 lg:col-span-1 row-span-1 rounded-lg"
        style={{
          backgroundImage: `url(${IMG3})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <img src={IMG3} alt="" className="object-cover " /> */}
      </div>
      <div
        className="col-span-4 lg:col-span-1 row-span-1 rounded-lg"
        style={{
          backgroundImage: `url(${IMG4})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <img src={IMG4} alt="" className="object-cover 1" /> */}
      </div>
    </div>
  );
};

export default Gallery;
