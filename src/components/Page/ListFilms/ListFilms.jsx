import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCategories, getGenre, key } from "../../../API/getFilms";
import clases from "./ListFilms.module.scss";
import { NavLink } from "react-router-dom";
import SortItem from "../../Sort/SortItem";
import {  sortNameganresItem } from "../../../API/ApiFunctions";
import { sliceData } from "../../../API/functionByApi";

import Pagonation from "../../UI/Pagination/Pagination";
import { useGetGanres } from "../../../API/hooks/UseGetData";

const CurrentCategories = () => {
  const { type, id } = useParams();
  const [filmsCategory, setFilmsCategory] = useState([]);
  const [pageFilms, setPageFilms] = useState(1);
  const [defaultYaer, setDefaultYaer] = useState(undefined);
  const [sortRating, setSortRating] = useState({ name: "", sort: "" });
  const [totalPages , setTotalPages] = useState() 
  const apiGenres = useGetGanres(type)

  const getCategoriesFilms = async (id, pageFilms, type, defaultYaer) => {
    const response = await getCategories(id, pageFilms, type, defaultYaer);
    setFilmsCategory(response.results);
    setTotalPages(response.total_pages)
    console.log(totalPages)
  };

  function sortNameGanre(id) {
    if (id) {
      const sortName = apiGenres.data?.find((item) =>
        item.id === Number(id) ? item : null
      );
      return sortName;
    }
    return "Выберите жанр";
  }

  function sortYaers() {
    const years = [];
    for (let i = 2024; i >= 1960; i--) {
      years.push({ name: i });
    }
    return years;
  }

  useEffect(() => {
    getCategoriesFilms(id, pageFilms, type, defaultYaer);
  }, [id, pageFilms, type, defaultYaer]);
  return (
    <div
      className={`w-full flex flex-col h-full justify-between ${clases.AppCategories}`}
    >
      <div>
        <h1 className="text-3xl my-4 ">{ type === 'movie' ? 'Фильмы' : type } смотреть онлайн</h1>
        <div className={clases.wrapper_categories_filter}>
          <SortItem
            title={sortNameGanre(id)}
            dataSort={apiGenres.data}
            typeSort={type}
          />
          <SortItem
            title={defaultYaer === undefined ? "Годы" : defaultYaer}
            dataSort={sortYaers()}
            typeSort={"yaers"}
            setData={setDefaultYaer}
          />
          <SortItem
            title={sortRating.name ? sortRating.name : "Рейтинг"}
            dataSort={[
              { name: "Кинопоиск", sort: "kp" },
              { name: "IMDB", sort: "imdb" },
              { name: "TMDB", sort: "tmdb" },
              { name: "Film Critics", sort: "filmCritics" },
            ]}
            typeSort={"rating"}
            setData={setSortRating}
            sortRating={sortRating}
          />
        </div>
        {!filmsCategory.length ? (
          <h2 className=" text-3xl mt-2">Ничего не найдено</h2>
        ) : (
          <ul className={clases.categories_list}>
            {filmsCategory?.map((item) => (
              <NavLink key={item.id} to={`/AboutFilm/type/${type}/` + item.id}>
                <div className="relative">
                  <li key={item.id}>
                    <div className={clases.categories_photo}>
                      <img
                        src={
                          `http://image.tmdb.org/t/p/w500/` + item.poster_path || backdrop_path
                        }
                        alt={`photo - ${item.id}`}
                      />
                    </div>
                    <div className={clases.hover_styleNameEndAboutFilms}>
                      <h2 className="flex  justify-center text-center  font-thin w-full mt-2 ">
                        {item.title || item.name}
                      </h2>
                    </div>
                    <div className={clases.hover_aboutItemCategories}>
                      <div>
                        <span className="text-text-color">id</span>
                        <span> : {item.id}</span>
                      </div>
                      <div className=" flex gap-2 flex-wrap p-1">
                  <span
                    className={`${clases.sliderListFilms_genre} text-text-color`}
                  >
                    Жанр{" "}
                  </span>
                  :
                  {sortNameganresItem(item.genre_ids, apiGenres.data)?.map(
                    (genre, index) => (
                      <span key={index}>{genre},</span>
                    )
                  )}{" "}
                </div>
                      <div>
                        <span className="text-text-color">Год:</span>
                        <span>
                          {" "}
                          :{" "}
                          {item.release_date
                            ? sliceData(item.release_date)
                            : ""}
                        </span>
                      </div>
                    </div>
                  </li>
                </div>
              </NavLink>
            ))}
          </ul>
        )}
      </div>
      <div className="flex justify-center items-center py-6 w-full ">
        <Pagonation totalPages={totalPages} setPageFilms={setPageFilms} pageFilms={pageFilms} />
      </div>
    </div>
  );
};

export default CurrentCategories;
