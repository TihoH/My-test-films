import React, { useRef, useState } from "react";
// import "./styles.scss";
import clases from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

const SliderHomeListFilms = ({ dataList , type}) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        // pagination={pagination}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
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
          <SwiperSlide key={index} className={ itemList ?  clases.SwiperSlide : clases.SwiperSlideSkeleton}>
            <NavLink to={`/AboutFilm/Type/${'Movie'}/` + itemList.id} className='h-full'>
              <div className={clases.swiper_images}>
                
                <img src={ 'https://image.tmdb.org/t/p/w500/' + itemList.poster_path } alt="" />
              </div>
              <div className={clases.swiperSlide_hoverAbout}>
                <div className={clases.swiper_about}>
                  <span className="text-text-color">Name:</span>
                  <span> {itemList.title}</span>
                </div>
                <div className={clases.swiper_about}>
                  <span className="text-text-color">Год:</span>
                  <span> {itemList.release_date }</span>
                </div>
                {/* { itemList.genres ?  <div className={clases.swiper_about}>
                  <span className="text-text-color flex  gap-2">Жанр </span>:
                  {itemList?.genres?.map((genre, index) => (
                    <span key={index}>{genre.name}</span>
                  ))}{" "}
                </div> : '' }
                
                  {itemList.rating ?   <div className={clases.swiper_about}>
                  <span className="text-text-color">Рейтинг:</span>
                  <div className="flex flex-col">
                    {itemList?.rating.filmCritics != 0 ? (
                      <span>filmCritics: {itemList?.rating.filmCritics}</span>
                    ) : null}
                    {itemList?.rating.imdb != 0 ? (
                      <span>imdb: {itemList?.rating.imdb}</span>
                    ) : null}
                    {itemList?.rating.kp != 0 ? (
                      <span>kp: {itemList?.rating.kp}</span>
                    ) : null}
                  </div>
                </div> : null} */}
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
