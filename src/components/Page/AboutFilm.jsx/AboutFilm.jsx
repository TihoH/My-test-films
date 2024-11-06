import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import {
  gatDataFilm,
  getCommentsFilm,
  // getPhoto,
  getDataById,
  getDataByIdCollaction,
} from "../../../API/getFilms.js";
import AboutFilmInfo from "./AboutFilmInfo";
import SliderMorePhoto from "../../Slider/CurrentFilmMorePhoto/SliderMorePhoto.jsx";
import Modal from "./../../ModalWindow/Modal.jsx";
import AboutFilmPersons from "./AboutFilmPersons.jsx";
import CurrentFilmSequel from "./CurrentFilmSequel.jsx";
import HomeListFilms from "../Home/HomeListFilms.jsx";
import {
  getFilmCollaction,
  getFilmId,
  getFilmIdVideo,
  getFilmRecommendation,
  getSimilyarFilm,
} from "./../../../API/constanseApiLink.js";
import { FunctionGetData } from "../../../API/ApiFunctions.js";

const AboutFilm = () => {
  const [currentFilm, setCurrentFilm] = useState({});
  const [currentFilmCollactionId, setCurrentFilmCollactionId] = useState();
  // const [limitComments, setLimitComments] = useState(10);
  // const [isActiveModalPersons, setIsActiveModalPersons] = useState(false);
  // const [currentFilmSequelArr, setCurrentFilmSequelArr] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendationFilms, setRecommendationFilms] = useState([]);
  const [collactionsFilm, setCollactionsFilm] = useState([]);
  const [dataVideo, setDataVideo] = useState([]);
  const { id, type } = useParams();
  const { pathname } = useLocation();
  

  const getFilm = async (id , type) => {
    const response = await getDataById(id, getFilmId, type);
    setCurrentFilm(response);
    setCurrentFilmCollactionId(response.belongs_to_collection.id);
  };

  const getCollactions = async (currentFilmCollactionId, getFilmCollaction) => {
    const response = await getDataByIdCollaction(
      currentFilmCollactionId,
      getFilmCollaction
    );
    setCollactionsFilm(
      response.parts ? response.parts.sort((a, b) => a.release_date - b.release_date) : response.seasons.sort((a, b) => a.release_date - b.release_date)

    );
  };

  async function getVideo(id , type) {
    const response = await getDataById(id, getFilmIdVideo , type);
    const findOfficial = response.results.find(
      (item) => item.type === "Trailer"
    );
    setDataVideo(findOfficial);
  }
  useEffect(() => {
    getFilm(id , type);
      getVideo(id , type);
    FunctionGetData(setRecommendationFilms, id, getFilmRecommendation , type);
    FunctionGetData(setSimilarMovies, id, getSimilyarFilm , type);
    getCollactions(currentFilmCollactionId, getFilmCollaction);
  }, [id, currentFilmCollactionId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={` flex flex-col z-10 relative `}>
      <AboutFilmInfo
        currentFilm={currentFilm}
        dataVideo={dataVideo ? dataVideo : ''}
      />
      <div className="container pt-5">
        {similarMovies ? (
          <HomeListFilms title={"Так же смотрят"} dataList={similarMovies} type={type} />
        ) : null}
        {recommendationFilms.length ? (
          <HomeListFilms
            title={"Рекомендовыные к просмотру"}
            dataList={recommendationFilms}
            type={type} 
          />
        ) : null}
        <CurrentFilmSequel
          currentFilmSequelArr={collactionsFilm}
          currentFilm={currentFilm}
          currentFilmCollactionId={currentFilmCollactionId}
          type={type} 
        />
        {/* <AboutFilmPersons
        currentFilm={currentFilm}
        setIsActiveModalPersons={setIsActiveModalPersons}
      />
      <Modal
        isActiveModal={isActiveModalPersons}
        setIsActiveModal={setIsActiveModalPersons}
      >
        'fqfq'
      </Modal>  */}
      </div>
    </div>
  );
};

export default AboutFilm;
