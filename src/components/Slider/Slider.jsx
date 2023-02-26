// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./Slider.css";

// swipper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SliderProducts } from "../../data/products";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        // loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {/* {SliderProducts.map((slide, i) => {
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price} Ghc</span>
              <div>Shop Now</div>
            </div>

            <img src={slide.img} alt="" className="img-p" />
          </SwiperSlide>;
        })} */}
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
