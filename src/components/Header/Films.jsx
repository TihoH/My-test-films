import React from "react";
import clases from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Films = ({ ganre, isActiveHoverMenu, setIsActiveHoverMenu  , typeLink }) => {
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
      <div className="ml-4 text-xl">
        <h2 className="text-white">Производство</h2>
      </div>
    </div>
  );
};

export default Films;
