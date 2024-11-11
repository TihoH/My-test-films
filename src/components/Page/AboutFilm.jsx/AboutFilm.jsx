import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { getDataById, getDataByIdCollaction } from "../../../API/getFilms.js";
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
import {
  FunctionGetData,
  getTraillerFilm,
  getTypeGanre,
} from "../../../API/ApiFunctions.js";
import AboutFilmComments from "./AboutFilmComments.jsx";
import { useGetComments } from "../../../API/hooks/useCommentsFilm.js";


const AboutFilm = () => {
  const [currentFilm, setCurrentFilm] = useState({});
  const [currentFilmCollactionId, setCurrentFilmCollactionId] = useState("");
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendationFilms, setRecommendationFilms] = useState([]);
  const [collactionsFilm, setCollactionsFilm] = useState([]);
  const [allSeasons, setAllSeasons] = useState(undefined);
  const [dataVideo, setDataVideo] = useState([]);
  const [genres, setGenres] = useState([]);
  // const [actors, setActors] = useState([]);
  const randomNum = Math.floor(Math.random() * 10);
  const comments = useGetComments(randomNum)
  const { id, type } = useParams();
  const { pathname } = useLocation();

  console
  console.log(comments)

  const getFilm = async (id, type) => {
    const response = await getDataById(id, getFilmId, type);
    setCurrentFilm(response);
    setCurrentFilmCollactionId(response.belongs_to_collection?.id);
    if (response.seasons) {
      setAllSeasons(response.seasons);
    }
  };

  const getCollactions = async (currentFilmCollactionId, getFilmCollaction) => {
    if (currentFilmCollactionId) {
      const response = await getDataByIdCollaction(
        currentFilmCollactionId,
        getFilmCollaction
      );
      setCollactionsFilm(
        // response.parts ? response.parts.sort((a, b) => a.release_date - b.release_date) : response.seasons.sort((a, b) => a.release_date - b.release_date)
        response?.parts?.sort((a, b) => a.release_date - b.release_date)
      );
    }
    return;
  };

  console.log(type)

  useEffect(() => {
    getFilm(id, type);
    getTraillerFilm(setDataVideo, getFilmIdVideo, type, id);
    getTypeGanre(setGenres, type);
    FunctionGetData(setRecommendationFilms, id, getFilmRecommendation, type);
    FunctionGetData(setSimilarMovies, id, getSimilyarFilm, type);
    getCollactions(currentFilmCollactionId, getFilmCollaction);
  }, [id, currentFilmCollactionId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={` flex flex-col z-10 relative `}>
      
      <AboutFilmInfo
        currentFilm={currentFilm}
        dataVideo={dataVideo ? dataVideo : ""}
      />
      <div className="container pt-5">
        {similarMovies.length ? (
          <HomeListFilms
            title={"Так же смотрят"}
            dataList={similarMovies}
            type={type}
            genres={genres}
          />
        ) : null}
        {recommendationFilms.length ? (
          <HomeListFilms
            title={"Рекомендовыные к просмотру"}
            dataList={recommendationFilms}
            type={type}
            genres={genres}
          />
        ) : null}
        <CurrentFilmSequel
          currentFilmSequelArr={collactionsFilm}
          allSeasons={allSeasons}
          currentFilm={currentFilm}
          currentFilmCollactionId={currentFilmCollactionId}
          type={type}
          genres={genres}
        />
        <AboutFilmComments comments={comments}/>
      </div>
    </div>
  );
};

export default AboutFilm;
