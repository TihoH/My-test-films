import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import clases from "./styleSwiper.module.css";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

// import "./style.module.css";

// import required modules
import { Navigation } from 'swiper/modules';

export default function App({ morePhoto }) {
  return (
    <div>
      <h3 className="text-3xl mt-5">Кадры с фильма</h3>
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={true}
          // loop={true}
          navigation={true}
          modules={[Navigation]}
          className={clases.mySwiper}
        >
            {morePhoto?.map((photo, index) => (
              <SwiperSlide key={index} className={clases.swiperSlide}>
                <img src={ `http://image.tmdb.org/t/p/w780/${photo.file_path}`  } alt="" />
              </SwiperSlide>
            ))}
        </Swiper>
      </>
    </div>
  );
}
