import React, { useEffect, useState } from "react";
import Slider from "../../Slider/HomeBanner/Slider";
import clases from "./Home.module.scss";
import HomeListFilms from "./HomeListFilms";
import { gatDataFilm } from "../../../API/getFilms";
import { useInView } from "react-intersection-observer";
import {
  BestRating,
  getUppComming,
  getWatchingNowPlay,
  HomePopulyar,
  NowPlaying,
} from "../../../API/constanseApiLink";
import HomeInfoFilms from "./HomeInfoFilms";
import { getTypeGanre } from "../../../API/ApiFunctions";

const Home = () => {
  const [popularFilmList, setPopularFilmList] = useState([]);
  const [bestRatingFilm, setBestRatingFilm] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [watchingNow, setWatchinNow] = useState([]);
  const [uppComming, setUppComming] = useState([]);
  const [genres , setGenres] = useState([])
  const [stateUppComming , setStateUppComming] = useState('movie')
  const [statePopular , setStatePopular] = useState( 'movie' )
  const [stateWatchigNow , setStateWatchigNow] = useState( 'movie' )
  const [stateBastRating , setStateBastRating] = useState( 'movie' )

  const { ref, inView, entry } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  async function getDataApi(setState, nameLink , typeDateFilms) {
    const response = await gatDataFilm( nameLink.getFunctionApi(typeDateFilms));
    setState(response.results);
  }

  useEffect(() => {
    getDataApi(setNowPlaying, NowPlaying , 'movie' );
    getDataApi(setPopularFilmList, HomePopulyar , statePopular );
    getDataApi(setBestRatingFilm, BestRating , stateBastRating );
    getTypeGanre( setGenres , 'movie' )
  }, [ statePopular  , stateBastRating]);

  useEffect(() => {
    if (inView) {
      getDataApi(setWatchinNow, getWatchingNowPlay , stateWatchigNow );
      getDataApi(setUppComming, getUppComming , stateUppComming );
    }
  }, [inView ,stateWatchigNow ]);

  return (
    <div className={clases.home}>
      <div className={clases.HomeSlider}>
        <Slider dataFilms={nowPlaying.slice(0, 5)} count={5} type={'movie'} />
      </div>
      <div className="pt-5 flex flex-col gap-6 container">
        <HomeListFilms
          title={"Популярные "}
          dataList={popularFilmList}
          type={statePopular}
          setDataType={setStatePopular}
          genres={genres}
        />
        <HomeListFilms
          title={"Фильмы с выскоим рейтингом "}
          dataList={bestRatingFilm}
          type={stateBastRating}
          setDataType={setStateBastRating}
          genres={genres}
        />
        <div ref={ref}></div>
        <HomeInfoFilms/>
        <HomeListFilms
          title={"Сейчас смотрят "}
          dataList={watchingNow}
          type={stateWatchigNow}
          setDataType={setStateWatchigNow}
          genres={genres}
        />
        <HomeListFilms
          title={"Скоро на экранах"}
          dataList={uppComming.slice(10, 20)}
          type={stateUppComming}
          genres={genres}
        />
      </div>
    </div>
  );
};

export default Home;
