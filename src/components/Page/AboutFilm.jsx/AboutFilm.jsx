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
import { FunctionGetData, getTypeGanre } from "../../../API/ApiFunctions.js";

const AboutFilm = () => {
  const [currentFilm, setCurrentFilm] = useState({});
  const [currentFilmCollactionId, setCurrentFilmCollactionId] = useState('');
  // const [limitComments, setLimitComments] = useState(10);
  // const [isActiveModalPersons, setIsActiveModalPersons] = useState(false);
  // const [currentFilmSequelArr, setCurrentFilmSequelArr] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendationFilms, setRecommendationFilms] = useState([]);
  const [collactionsFilm, setCollactionsFilm] = useState([]);
  const [dataVideo, setDataVideo] = useState([]);
  const [genres , setGenres] = useState([])
  const { id, type } = useParams();
  const { pathname } = useLocation();
  
  const getFilm = async (id , type) => {
    const response = await getDataById(id, getFilmId, type);
    setCurrentFilm(response);
    setCurrentFilmCollactionId(response.belongs_to_collection?.id);
  };

  const getCollactions = async (currentFilmCollactionId, getFilmCollaction) => {
   if(currentFilmCollactionId){
    const response = await getDataByIdCollaction(
      currentFilmCollactionId,
      getFilmCollaction
    );
    setCollactionsFilm(
      response.parts ? response.parts.sort((a, b) => a.release_date - b.release_date) : response.seasons.sort((a, b) => a.release_date - b.release_date)
      // response.parts ? response.parts.sort((a, b) => a.release_date - b.release_date) : response.seasons.sort((a, b) => a.release_date - b.release_date)
    );
   }
   return
    // console.log(response)
    // setCollactionsFilm(
    //   response.parts ? response.parts.sort((a, b) => a.release_date - b.release_date) : response.seasons.sort((a, b) => a.release_date - b.release_date)
    //   // response.parts ? response.parts.sort((a, b) => a.release_date - b.release_date) : response.seasons.sort((a, b) => a.release_date - b.release_date)
    // );
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
      getTypeGanre( setGenres , type )
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
        {similarMovies.length ? (
          <HomeListFilms title={"Так же смотрят"} dataList={similarMovies} type={type} genres={genres} />
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
          currentFilm={currentFilm}
          currentFilmCollactionId={currentFilmCollactionId}
          type={type} 
          genres={genres}
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
