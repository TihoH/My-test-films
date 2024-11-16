import React, { useRef } from "react";
import clases from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { sortNameganresItem } from "../../../API/ApiFunctions";

const SliderHomeListFilms = ({ dataList, genres, swiperref, type }) => {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        onSwiper={(swiper) => (swiperref.current = swiper)}
        className={`${clases.swiper}`}
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
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {dataList?.map((itemList, index) => (
          <SwiperSlide
            key={index}
            className={
              itemList ? clases.SwiperSlide : clases.SwiperSlideSkeleton
            }
          >
            <NavLink
              to={
                `/AboutFilm/type/${
                  type === "tv" || type === "Tv-serials"
                    ? "Tv-serials"
                    : "movie"
                }/` + itemList.id
              }
              className="h-full"
            >
              <div className={clases.swiper_images}>
                <div className="relative">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500/" + itemList.poster_path
                    }
                    alt=""
                  />
                  <div className={clases.swiperSlide_hoverAbout}>
                    <div className={`${clases.swiper_about} text-center `}>
                      <span>{itemList.name || itemList.title}</span>
                    </div>
                    <div className={clases.swiper_about}>
                      <span className="text-text-color">Год:</span>
                      <span> {itemList.release_date}</span>
                    </div>

                    <div className="flex gap-1">
                      <ul className="listDataApi  flex-wrap ">
                        <li className={` text-text-color`}>Жанр:</li>
                        {sortNameganresItem(itemList.genre_ids, genres)?.map(
                          (genre, index) => (
                            <li key={index}>{genre}</li>
                          )
                        )}{" "}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
            <h2 className="mt-1 text-text-color text-center">
              {" "}
              {itemList.title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderHomeListFilms;
