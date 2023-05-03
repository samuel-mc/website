import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles/ImageSlider.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ImageSlider = ({items = []}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop
        spaceBetween={50}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="slide__swiper"
      >

        {
            items.map((item, index) => (
                <SwiperSlide key={index}>
                    <img src={item} />
                </SwiperSlide>
            ))
        }
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={12}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumb__swiper"
      >
        {
            items.map((item, index) => (
                <SwiperSlide key={index}>
                    <img src={item} />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}

export default ImageSlider;