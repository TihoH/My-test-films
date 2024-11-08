import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
export default function App({ dataFilms , type }) {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      loop={true}
      speed={5000}
      centeredSlides={true}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
       
      }}
      className="banner-wrapper"
    >
      {dataFilms?.map((film) => (
        <SwiperSlide key={film.id} className={"relative "}>
          <NavLink to={`/AboutFilm/type/${type}/` + film.id}>
            <div className={"swiperSlide_name"}>
              <span>{film?.title}</span>
              <span className="text-red-500">Смотреть</span>
            </div>
          </NavLink>
          <img src={ 'http://image.tmdb.org/t/p/w1280/' + film.backdrop_path } alt={"background photo"} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
