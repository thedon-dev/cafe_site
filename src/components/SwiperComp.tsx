import React from "react";

// Import images
import IMG1 from "../assets/IMG2.jpg";
import IMG2 from "../assets/IMG6.jpg";
import IMG3 from "../assets/IMG1.jpg";

// Images array
const images: string[] = [IMG1, IMG2, IMG3];

const SwiperComp: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto flex items-center justify-center space-x-4 py-10 mt-10">
      {images.map((image, index) => (
        <div
          key={index}
          className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
            index === 1
              ? "z-10 w-60 h-60 lg:w-80 lg:h-100 scale-110"
              : "w-40 h-50 lg:w-60 lg:h-80"
          }  ${
            index === 0 ? "translate-x-5" : index === 2 ? "-translate-x-5" : ""
          }`}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        //    <div
        //    key={index}
        //    className={`absolute transition-all duration-300 rounded-xl shadow-lg overflow-hidden ${
        //      index === 1
        //        ? "w-64 h-80 z-10 scale-110" // Center image (Larger & on top)
        //        : "w-48 h-64 z-0 opacity-80" // Side images (Smaller & faded)
        //    } ${index === 0 ? "-translate-x-16" : "translate-x-16"}`} // Moves side images slightly behind
        //  >
        //    <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
        //  </div>
      ))}
    </div>
  );
};

export default SwiperComp;
