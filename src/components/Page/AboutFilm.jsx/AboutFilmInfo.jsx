import React from "react";
import clases from "./AboutFilm.module.scss";
import CurrentFilmVideos from "./CurrentFilmVideos";

const AboutFilmInfo = ({ currentFilm, dataVideo }) => {
  return (
    <div
      className={clases.aboutFilm}
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/w1280/${currentFilm.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex  mt-4">
        <div className={clases.aboutFilm_container}>
          <div className={clases.preview_photo}>
            <img
              src={"http://image.tmdb.org/t/p/w780/" + currentFilm.poster_path}
              alt={"preview" + currentFilm.name}
            />
          </div>
          <div className={clases.about_wrapper}>
            <div className={clases.film_about}>
            <div>
              
                <h1 className="text-2xl ">{currentFilm?.name}</h1>
              </div>
              <div>
                <h1 className="text-2xl ">{currentFilm?.title}</h1>
                <h2 className="text-center my-2 text-xl font-thin">
                  {" "}
                  {currentFilm.tagline ? `${currentFilm.tagline}` : ""}{" "}
                </h2>
              </div>
            </div>
            <div>
              {/* <div className="text-lg">
                <span className="text-text-color">название</span>
                <span> : {currentFilm.name}</span>
              </div> */}
              <div>
                <span className="text-text-color">ID</span>
                <span> : {currentFilm.id}</span>
              </div>
              <div className="text-lg">
                <span className="text-text-color">Дата релиза</span> :{" "}
                <span>{currentFilm.release_date}</span>
              </div>
              <div className="text-lg flex gap-2 flex-wrap">
                <span className="text-text-color">Жанр </span>:
                {currentFilm?.genres?.map((genre, index) => (
                  <span key={index}>{genre.name}</span>
                ))}{" "}
              </div>
              <ul className="text-lg flex gap-2 flex-wrap">
                <span className="text-text-color">Страна</span> :{" "}
                {currentFilm.origin_country
                  ? currentFilm.origin_country.map((country, index) => (
                      <li key={index}>
                        <span>{country}</span>
                      </li>
                    ))
                  : "непоняика"}
              </ul>
              {/* <div>
                <span className="text-text-color">Тип</span>
                <span> : {currentFilm.type}</span>
              </div> */}
              <div>
                <span className="text-text-color">Продолжительность</span>
                <span>
                  {" "}
                  : {currentFilm.runtime
                    ? currentFilm.runtime
                    : "не указано"}{" "}
                  мин
                </span>
              </div>
              {/* <div>
                <span className="text-text-color">Премьера в мире</span>
                <span>
                  {" "}
                  :{" "}
                  {currentFilm.premiere
                    ? new Date(
                        currentFilm?.premiere?.world
                      ).toLocaleDateString()
                    : "не указано"}{" "}
                </span>
              </div> */}
              {/* <div>
                <span className="text-lg mr-2 text-text-color">Возраст:</span>
                <span>
                  {currentFilm.ageRating
                    ? currentFilm.ageRating + "+"
                    : "Описание не найдено"}
                </span>
              </div> */}
              <ul
                className={`${clases.productionFilm} flex items-center flex-wrap`}
              >
                <h5 className="text-lg mr-2 text-text-color">Производство:</h5>
                {currentFilm?.production_companies?.map((prodComp, index) => (
                  <li key={index} className="flex">
                    {/* <img  src={"http://image.tmdb.org/t/p/w92/" + prodComp.logo_path} alt="" /> */}
                    <span>{prodComp.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={clases.currentFilm_rating}>
              <p title="рейтинг">
                <span className="text-text-color">KP</span>
                {currentFilm?.rating?.kp}
              </p>
              <p title="рейтинг">
                <span className="text-text-color">IMBD</span>
                {currentFilm?.rating?.imdb}
              </p>
              <p title="рейтинг">
                <span className="text-text-color">FCRT</span>
                {currentFilm?.rating?.filmCritics}
              </p>
            </div>
            <div className="mt-2">
              <span className="text-lg mr-2 text-text-color">Описание:</span>
              <span>
                {currentFilm.overview
                  ? currentFilm.overview
                  : "Описание не найдено"}
              </span>
            </div>
                  {dataVideo ?  <CurrentFilmVideos
              currentFilm={currentFilm}
              dataVideo={dataVideo}
            /> : ''}
          </div>
        </div>
      </div>
      <div className={clases.bgFon}></div>
    </div>
  );
};

export default AboutFilmInfo;
