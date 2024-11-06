import React from "react";
import clases from "./AboutFilm.module.scss";
import { AiFillLike, AiOutlineDislike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AboutFilmPersons = ({
  currentFilm,
  setIsActiveModalPersons,
  titlePersons,
  totalComments,
  commetnsFilm,
  limitComments,
  setLimitComments,
}) => {
  return (
    <div>
      <div className={clases.aboutFilm_person}>
        <div className="flex items-center justify-between mt-5">
          <h2 className="text-3xl">Актеры</h2>
          <button
            className="text-text-color bg-bg-color px-4 py-1  rounded-md hover:bg-gray-700 transition hover:text-white  "
            onClick={() => setIsActiveModalPersons(true)}
          >
            Показать всех
          </button>
        </div>
        <ul className={clases.persons}>
          {titlePersons?.map((person) => (
            <NavLink key={person.id} to={"/Info-person/" + person.id}>
              <li>
                <img src={person.photo} alt="person photo" />
                <div className=" min-h-12 flex  mt-2 text-center justify-center">
                  {person.name ? person.name : person.enName}
                </div>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-text-color text-3xl">Отзывы</h2>
        <div className="">
          <div className="text-xl">
            <span className="text-text-color">О фильме:</span>{" "}
            {currentFilm.name}
          </div>
          {totalComments ? (
            <h3>{totalComments ? `Всего ${totalComments} коментария` : ""}</h3>
          ) : (
            <h3>Отзывов нет</h3>
          )}
        </div>
        <div className={clases.aboutFilm_sectionComments}>
          <ul className="flex gap-2 flex-col">
            {commetnsFilm?.map((comments, index) => (
              <li key={index} className="p-2 bg-gray-900 flex justify-between">
                <div>
                  <div className="flex items-center">
                    <div>
                      <FaUserCircle className="text-3xl" />
                    </div>
                    <div className="ml-2">
                      <span className="text-text-color">Автор: </span>
                      <span>{comments.author}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-text-color">Добавлено: </span>
                    <span>
                      {new Date(comments.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-text-color">Описание: </span>
                    <span>{comments.title}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center  gap-2 justify-between">
                    <span>
                      <AiFillLike />
                    </span>
                    <span>{comments.reviewLikes}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-between ">
                    <span>
                      <AiOutlineDislike />
                    </span>
                    <span>{comments.reviewDislikes}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {totalComments > limitComments ? (
            <button
              className="block w-full bg-gray-800 rounded-md hover:bg-gray-900 transition my-10 py-2"
              onClick={() =>
                setLimitComments(
                  limitComments <= totalComments
                    ? limitComments + 5
                    : limitComments === totalComments
                )
              }
            >
              Показать больше
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutFilmPersons;
