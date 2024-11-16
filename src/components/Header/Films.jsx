import React from "react";
import clases from "./Header.module.css";
import { NavLink } from "react-router-dom";
import HeaderTabs from "./HeaderTabs";
import { useGetDataApi, useGetGanres } from "../../API/hooks/UseGetData";
import { BestRating, HomePopulyar } from "../../API/constanseApiLink";

const Films = ({
  ganre,
  isActiveHoverMenu,
  setIsActiveHoverMenu,
  typeLink,
  headerTabsByHoverMenuFilms,
}) => {
  const apiGetPopular = useGetDataApi("getPopular", HomePopulyar, "movie");
  const apiBestRating = useGetDataApi("getBestRating", BestRating, "movie");
  const apiGenres = useGetGanres("movie");
  return (
    <div
      className={
        isActiveHoverMenu
          ? `${clases.ganre} ${clases.activeGanre}`
          : clases.ganre
      }
    >
      <ul className={clases.ganre_list}>
        <li className="text-white font-semibold">ЖАНРЫ</li>
        {ganre?.map((film, index) => (
          <NavLink
            key={index}
            to={`type/movie/` + film.id}
            onClick={() => setIsActiveHoverMenu(false)}
          >
            <li className="">{film.name}</li>
          </NavLink>
        ))}
      </ul>
      <HeaderTabs
        headerTabsByHoverMenuFilms={headerTabsByHoverMenuFilms}
        apiGetPopular={apiGetPopular}
        apiGenres={apiGenres}
        apiBestRating={apiBestRating}
      />
    </div>
  );
};

export default Films;
