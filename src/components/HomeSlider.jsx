import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Hero from "./Hero";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSlider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="w-full h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Hero {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
