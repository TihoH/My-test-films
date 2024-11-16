import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { getDataById } from "../../../API/getFilms.js";
import AboutFilmInfo from "./AboutFilmInfo";
import CurrentFilmSequel from "./CurrentFilmSequel.jsx";
import HomeListFilms from "../Home/HomeListFilms.jsx";
import {
  getFilmCollaction,
  getFilmId,
  getFilmIdVideo,
  getFilmRecommendation,
  getSimilyarFilm,
} from "./../../../API/constanseApiLink.js";
import AboutFilmComments from "./AboutFilmComments.jsx";
import { useGetCollactions, useGetComments, useGetDataByID, useGetGanres, useGetVideo } from "../../../API/hooks/UseGetData.js";


const AboutFilm = () => {
  const { id, type } = useParams();
  const { pathname } = useLocation();
  const [currentFilm, setCurrentFilm] = useState({});
  const [currentFilmCollactionId, setCurrentFilmCollactionId] = useState('');
  const [allSeasons, setAllSeasons] = useState(undefined);
  const apigenres = useGetGanres()
  const apiTrailler = useGetVideo(getFilmIdVideo, type, id)
  const apiRecommendation = useGetDataByID( 'getRecommendation' ,id, getFilmRecommendation, type)
  const apiSimilarMovies = useGetDataByID( 'getSimilay' , id, getSimilyarFilm, type)
  const apiCollactions = useGetCollactions(currentFilmCollactionId , getFilmCollaction)
  const randomNum = Math.floor(Math.random() * 10);
  const comments = useGetComments(randomNum)

  const getFilm = async (id, type) => {
    const response = await getDataById(id, getFilmId, type);
    setCurrentFilm(response);
    setCurrentFilmCollactionId(response?.belongs_to_collection?.id);
    if (response.seasons) {
      setAllSeasons(response.seasons);
    }
  };

  useEffect(() => {
    getFilm(id, type);
  }, [id, currentFilmCollactionId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={` flex flex-col z-10 relative `}>
      
      <AboutFilmInfo
        currentFilm={currentFilm}
        dataVideo={apiTrailler}
      />
      <div className="container pt-5">
        {apiSimilarMovies?.length ? (
          <HomeListFilms
            title={"Так же смотрят"}
            dataList={apiSimilarMovies}
            type={type}
            genres={apigenres.data}
          />
        ) : null}
        {apiRecommendation?.length ? (
          <HomeListFilms
            title={"Рекомендовыные к просмотру"}
            dataList={apiRecommendation}
            type={type}
            genres={apigenres.data}
          />
        ) : null}
        <CurrentFilmSequel
          currentFilmSequelArr={apiCollactions}
          allSeasons={allSeasons}
          currentFilm={currentFilm}
          currentFilmCollactionId={currentFilmCollactionId}
          type={type}
          genres={apigenres}
        />
        <AboutFilmComments comments={comments}/>
      </div>
    </div>
  );
};

export default AboutFilm;
