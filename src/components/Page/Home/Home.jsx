import React, { useEffect, useState } from "react";
import Slider from "../../Slider/HomeBanner/Slider";
import clases from "./Home.module.scss";
import HomeListFilms from "./HomeListFilms";
import { useInView } from "react-intersection-observer";
import {
  BestRating,
  getUppComming,
  getWatchingNowPlay,
  HomePopulyar,
  NowPlaying,
} from "../../../API/constanseApiLink";
import HomeInfoFilms from "./HomeInfoFilms";
import { useGetDataApi, useGetGanres } from "../../../API/hooks/UseGetData";

const Home = () => {
  const apiGenres = useGetGanres("movie");
  const [stateUppComming, setStateUppComming] = useState("movie");
  const [statePopular, setStatePopular] = useState("movie");
  const [stateWatchigNow, setStateWatchigNow] = useState("movie");
  const [stateBastRating, setStateBastRating] = useState("movie");
  const apiGetPopular = useGetDataApi("getPopular", HomePopulyar, statePopular);
  const apiBanner = useGetDataApi(
    "getWatchingNow",
    NowPlaying,
    'movie'
  );
  const apiBestRating = useGetDataApi(
    "getBestRating",
    BestRating,
    stateBastRating
  );
  const apiWatchigNow = useGetDataApi(
    "getWatchingNow",
    NowPlaying,
    stateWatchigNow
  );
  const apiUppComming = useGetDataApi(
    "getUppComming",
    getUppComming,
    stateUppComming
  );

  const { ref, inView, entry } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <div className={clases.home}>
      <div className={clases.HomeSlider}>
        <Slider
          dataFilms={apiBanner?.slice(0, 5)}
          count={5}
          type={"movie"}
        />
      </div>
      <div className="pt-5 flex flex-col gap-6 container">
        <HomeListFilms
          title={"Популярные "}
          dataList={apiGetPopular}
          type={statePopular}
          setDataType={setStatePopular}
          genres={apiGenres.data}
        />
        <HomeListFilms
          title={"Фильмы с выскоим рейтингом "}
          dataList={apiBestRating}
          type={stateBastRating}
          setDataType={setStateBastRating}
          genres={apiGenres.data}
        />
        <div ref={ref}></div>
        <HomeInfoFilms />
        <HomeListFilms
          title={"Сейчас смотрят "}
          dataList={apiUppComming}
          type={stateUppComming}
          setDataType={setStateWatchigNow}
          genres={apiGenres.data}
        />
        <HomeListFilms
          title={"Скоро на экранах"}
          dataList={apiWatchigNow?.slice(10, 20)}
          type={stateWatchigNow}
          genres={apiGenres.data}
        />
      </div>
    </div>
  );
};

export default Home;
