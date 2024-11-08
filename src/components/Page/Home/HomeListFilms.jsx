import React, { useState } from "react";
import SliderHomeListFilms from "../../Slider/HomeListFilms/SliderHomeListFilms";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const HomeListFilms = ({ title, dataList, type, setDataType , genres}) => {

  return (
    <div>
      <h2 className="text-3xl mb-1">{title}</h2>
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
      <SliderHomeListFilms dataList={dataList} type={type} genres={genres} />
    </div>
  );
};

export default HomeListFilms;
