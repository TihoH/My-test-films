import React, { useRef, useState } from "react";
import SliderHomeListFilms from "../../Slider/HomeListFilms/SliderHomeListFilms";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import clases from "./Home.module.scss";
import useMediaQuery from "@mui/material/useMediaQuery";

import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useLocation, useParams } from "react-router";

const HomeListFilms = ({ title, dataList, type, setDataType, genres }) => {
  const swiperref = useRef(null);
  const location = useLocation();
  const { id } = useParams();

  return (
    <div className={clases.homeListFils_wrapper}>
      <div
        className={
          location.pathname === `/AboutFilm/type/${type}/${id ? id : ""}`
            ? "flex justify-between"
            : ""
        }
      >
        <h2 className="text-xl md:text-3xl mb-3 relative">{title}</h2>
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center">
            {setDataType ? (
              <div className="my-2">
                <Stack spacing={2} direction="row">
                  <Button
                    variant={type === "movie" ? "contained" : "outlined"}
                    onClick={() => setDataType("movie")}
                  >
                    Фильмы
                  </Button>
                  <Button
                    variant={type === "tv" ? "contained" : "outlined"}
                    onClick={() => setDataType("tv")}
                  >
                    Сериалы
                  </Button>
                </Stack>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex">
            <Button
              swiperref={swiperref}
              onClick={() => swiperref.current?.slidePrev()}
              className="bg-orange-600 text-white  px-4 rounded hover:bg-orange-900 transition  "
            >
              {" "}
              <HiArrowLongLeft className="text-2xl" />
            </Button>
            <Button
              swiperref={swiperref}
              onClick={() => swiperref.current?.slideNext()}
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
            >
              <HiArrowLongRight className="text-2xl" />
            </Button>
          </div>
        </div>
      </div>
      <SliderHomeListFilms
        dataList={dataList}
        type={type}
        genres={genres}
        swiperref={swiperref}
      />
    </div>
  );
};

export default HomeListFilms;
