import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import IMG1 from "../assets/IMG2.jpg";
import IMG2 from "../assets/IMG6.jpg";
import IMG3 from "../assets/IMG10.jpg";

// Sample items (Replace with your actual data)
const images = [IMG1, IMG2, IMG3];

const SwiperComponent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <Swiper
        modules={[EffectCoverflow, Navigation, Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={25}
        // loopAdditionalSlides={images.length} // ✅ Start from the correct position
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="transition-transform duration-500 ease-in-out">
              <img
                src={image}
                // alt={item}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
