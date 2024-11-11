import React, { useState } from "react";
import clases from "./AboutFilm.module.scss";
import { NavLink } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { sliceData } from "../../../API/functionByApi";

const CurrentFilmSequel = ({
  currentFilmSequelArr,
  currentFilm,
  currentFilmCollactionId,
  type,
  allSeasons,
}) => {
  const [okTypeLink , setOkTypeLink] = useState(false)

  if(!currentFilmCollactionId && allSeasons == undefined ){
    return
  }
  
  function sortTypeSiquel(type, allSeasons) {
    if (type === "movie") {
      return currentFilmSequelArr;
    }
    return allSeasons;
  }

  function sortType(type , id){
    if(type === 'tv' || type === 'Tv-serials'){

      return ''
    }else{
      return `/AboutFilm/type/${type}/` + id
    }
  }
  const showErrorLinkSiquel = () => {
    if(type === 'tv' || type === 'Tv-serials'){
      setOkTypeLink(true)
      setTimeout( () => {
        setOkTypeLink(false)
      } , [5000] )
    }
  }
  return (
    <div className={clases.CurrentFilm_sequel_wrapper}>
      <h3 className="text-3xl"> Все части фильма </h3>
      <div className="">
        <ul className={` mt-2 ${clases.CurrentFilm_sequel_wrapperList}`}>
          {sortTypeSiquel(type, allSeasons)?.map((item, index) => (
            <NavLink key={index} to={ sortType(type , item.id) } onClick={ () => showErrorLinkSiquel() } >
              <li className={"w-full py-1"}>
                {currentFilmCollactionId != item.id ? (
                  <img
                    src={
                      `http://image.tmdb.org/t/p/w500/` +
                      currentFilm.poster_path
                    }
                    alt="photo"
                    // width={"200px"}
                    className={` ${clases.CurrentFilm_sequel_titlePhoto} absolute top-0 left-0 `}
                  />
                ) : null}
                <div className={clases.CurrentFilm_sequel_ShowImage}>
                  <img
                    className={clases.CurrentFilm_sequelImage}
                    src={`http://image.tmdb.org/t/p/w500/` + item.poster_path}
                    alt="photo"
                  />
                </div>
                <div className="flex justify-between relative">
                  <div className="flex items-center">
                    <h6>{item.title || item.name}</h6>
                    {currentFilm.id === item.id ? (
                      <CiCirclePlus className=" top-1 text-green-500 ml-6" />
                    ) : null}
                  </div>
                  <div>
                    Год:{" "}
                    {item.release_date || item?.air_date? sliceData(item?.release_date || item?.air_date ) : ''}
                  </div>
                </div>
              </li>
            </NavLink>
          ))}
        </ul>
          {okTypeLink ?         <div className={clases.CurrentFilm_sequel_ShowErorLink}>
                    <h5>Возникла проблема с данными API</h5>
                    <p className="text-sm">Нет возможности произвести переход на дуругой сезон </p>
                </div> : ''}
      </div>
    </div>
  );
};

export default CurrentFilmSequel;
