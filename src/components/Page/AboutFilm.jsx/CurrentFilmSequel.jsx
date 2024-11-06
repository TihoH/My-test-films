import React, { useEffect, useState } from "react";
import clases from "./AboutFilm.module.scss";
import { NavLink } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { sliceData } from "../../../API/functionByApi";

const CurrentFilmSequel = ({ currentFilmSequelArr, currentFilm , currentFilmCollactionId , type }) => {
  if(!currentFilmCollactionId){
    return
  }

  // function sliceData(release_date){
  //   const newData = release_date.slice(0 , 4)
  //   return newData
  // }

  return (
    <div className={clases.CurrentFilm_sequel_wrapper}>
      <h3 className="text-3xl"> Все части фильма </h3>
      <div>
        <ul className={` mt-2 ${clases.CurrentFilm_sequel_wrapperList}`}>
          {currentFilmSequelArr?.map((item, index) => (
            <NavLink
              key={index}
              to={`/AboutFilm/Type/${type}/` + item.id}
            >
              <li className={"w-full py-1 "}>
                {currentFilmCollactionId != item.id ? (
                  <img
                    src={ `http://image.tmdb.org/t/p/w500/` + currentFilm.poster_path}
                    alt="photo"
                    width={"200px"}
                    className={` ${clases.CurrentFilm_sequel_titlePhoto} absolute top-0 left-0 h-full`}
                  />
                ) : null}
                <div className={clases.CurrentFilm_sequel_ShowImage}>
                  <img
                    className={clases.CurrentFilm_sequelImage}
                    src={ `http://image.tmdb.org/t/p/w500/` + item.poster_path}
                     alt="photo"
                  />
                </div>
                <div className="flex justify-between relative">
                  <div className="flex items-center">
                    <h6>{item.title }</h6>
                    {currentFilm.id === item.id ? (
                      <CiCirclePlus className=" top-1 text-green-500 ml-6" />
                    ) : null}
                  </div>
                  <div>Год: { sliceData(item.release_date) } </div>
                </div>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurrentFilmSequel;
