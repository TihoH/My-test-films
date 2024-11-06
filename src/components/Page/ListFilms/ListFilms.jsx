import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCategories, getGenre } from "../../../API/getFilms";
import clases from "./ListFilms.module.scss";
import { NavLink } from "react-router-dom";
import SortItem from "../../Sort/SortItem";
import { getTypeGanre } from "../../../API/ApiFunctions";
import { sliceData } from "../../../API/functionByApi";
// import {
//   MdOutlineKeyboardDoubleArrowRight,
//   MdOutlineKeyboardDoubleArrowLeft,
// } from "react-icons/md";
import Pagonation from '../../UI/Pagination/Pagination'

const CurrentCategories = () => {
  const { type, id } = useParams();
  const [filmsCategory, setFilmsCategory] = useState([]);
  const [pageFilms, setPageFilms] = useState(1);
  const [genreSortData, setGenreSortData] = useState([]);
  const [defaultYaer, setDefaultYaer] = useState(undefined);
  const [sortRating, setSortRating] = useState({ name: "", sort: "" });

  const getCategoriesFilms = async (id, pageFilms, type, defaultYaer) => {
    const response = await getCategories(id, pageFilms, type, defaultYaer);
    setFilmsCategory(response.results);
  };

  function sortNameGanre(id) {
    if (id) {
      const sortName = genreSortData?.find((item) =>
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
    getTypeGanre(setGenreSortData, type);
  }, [id, pageFilms, type, defaultYaer]);
  return (
    <div
      className={`w-full flex flex-col h-full justify-between ${clases.AppCategories}`}
    >
      <div>
        <h1 className="text-3xl my-4 ">{type} смотреть онлайн</h1>
        <div className={clases.wrapper_categories_filter}>
          <SortItem
            title={sortNameGanre(id)}
            dataSort={genreSortData}
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
              <NavLink key={item.id} to={`/AboutFilm/Type/${type}/` + item.id}>
                <div className="relative">
                  <li key={item.id}>
                    <div className={clases.categories_photo}>
                      <img
                        src={
                          `http://image.tmdb.org/t/p/w500/` + item.poster_path
                        }
                        alt={`photo - ${item.id}`}
                      />
                    </div>
                    <div className={clases.hover_styleNameEndAboutFilms}>
                      <h2 className="text-center w-full mt-2 text-text-color">
                        {item.title || item.name}
                      </h2>
                    </div>
                    <div className={clases.hover_aboutItemCategories}>
                      <div>
                        <span className="text-text-color">id</span>
                        <span> : {item.id}</span>
                      </div>
                      <div className=" flex gap-2 flex-wrap">
                        <span className="text-text-color">Жанр </span>:
                        {item?.genre_ids?.map((genre, index) => (
                          <span key={index}>{genre},</span>
                        ))}{" "}
                      </div>
                      <div>
                        <span className="text-text-color">Год:</span>
                        <span> : { item.release_date ?  sliceData(item.release_date) : ''}</span>
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
        {/* <div>
          <button type="button" className="text-5xl">
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
        </div>
        <button
          type="button"
          className="border border-gray-600 p-2 px-8  rounded-md hover:border-gray-300 transition text-lg mx-5"
          onClick={() => setPageFilms(pageFilms + 1)}
        >
          Показать еще
        </button>
        <div>
          <button
            type="button"
            className="text-5xl hover:text-green-800 transition-all hover:text-7xl "
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </div> */}
        {/* <Pagination /> */}
        <Pagonation />
      </div>
    </div>
  );
};

export default CurrentCategories;
