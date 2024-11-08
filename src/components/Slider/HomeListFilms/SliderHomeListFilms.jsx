import React, { useRef, useState } from "react";
// import "./styles.scss";
import clases from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { sortNameganresItem } from "../../../API/ApiFunctions";

const SliderHomeListFilms = ({ dataList, type, genres }) => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        className={clases.swiper}
      >
        {dataList.map((itemList, index) => (
          <SwiperSlide
            key={index}
            className={
              itemList ? clases.SwiperSlide : clases.SwiperSlideSkeleton
            }
          >
            <NavLink
              to={`/AboutFilm/type/${"movie"}/` + itemList.id}
              className="h-full"
            >
              <div className={clases.swiper_images}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/w500/" + itemList.poster_path
                  }
                  alt=""
                />
              </div>
              <div className={clases.swiperSlide_hoverAbout}>
                <div className={clases.swiper_about}>
                  <span>{itemList.name || itemList.title}</span>
                </div>
                <div className={clases.swiper_about}>
                  <span className="text-text-color">Год:</span>
                  <span> {itemList.release_date}</span>
                </div>

                <div className=" flex gap-2 flex-wrap p-1">
                  <span
                    className={`${clases.sliderListFilms_genre} text-text-color`}
                  >
                    Жанр{" "}
                  </span>:
                  {sortNameganresItem(itemList.genre_ids, genres)?.map(
                    (genre, index) => (
                      <span key={index}>{genre},</span>
                    )
                  )}{" "}
                </div>
              </div>
            </NavLink>
            <h2 className="mt-1 text-text-color "> {itemList.title}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderHomeListFilms;
