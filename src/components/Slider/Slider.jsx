import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// swipper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SliderProducts } from "../../data/products";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide) => {
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}</span>
              <div>Shop Now</div>
            </div>

            <img src={slide.img} alt="" className="img-p" />
          </SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
