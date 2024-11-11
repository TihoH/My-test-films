import React, { useEffect, useState } from "react";
import { useActors } from "../../../API/hooks/useDataActors";
import { useParams } from "react-router";
import clases from "./AboutFilm.module.scss";

const AboutFilmActors = ({}) => {
  const { id } = useParams();
  const [activeSliceActors, setActiveSliceActors] = useState(false);
  const { data } = useActors(id);

  function changeLengthActors() {
    if (!activeSliceActors) {
      return data?.slice(0, 15);
    }
    return data;
  }
  return (
    <div className="flex">
      <ul className="listDataApi flex flex-wrap">
        <li className="text-text-color text-lg">Актеры:</li>
        {changeLengthActors()?.map((actor) => (
          <li key={actor.id} className={`${clases.showInfoByActors} relative`}>
            {actor.name}
            <div className="absolute ">
              <img
                src={"http://image.tmdb.org/t/p/w185/" + actor.profile_path}
                alt=""
              />
            </div>
          </li>
        ))}
        <li>
          ...{" "}
          <button
            className="text-text-color hover:text-gray-300 transition"
            onClick={() => setActiveSliceActors(!activeSliceActors)}
          >
            { !activeSliceActors ? 'Показать всех' : 'Cкрыть' }
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AboutFilmActors;
