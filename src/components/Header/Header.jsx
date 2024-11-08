import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import Films from "./Films";
import clases from "./Header.module.css";
import Modal from "../ModalWindow/Modal";
import SearchFilms from "../SearchFilms/SearchFilms";
import { getTypeGanre } from "../../API/ApiFunctions";

const Header = () => {
  const [isActiveHoverMenu, setIsActiveHoverMenu] = useState(false);
  const [ganre, setGenre] = useState([]);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [typeLink, setTypeLink] = useState("");
  const { type } = useParams();

  const headerLinks = [
    {
      title: "Главная",
      type: "",
      activeHover: false,
      onMouseMove: () => setIsActiveHoverMenu(false),
      link: false,
    },
    {
      title: "Фильмы",
      type: "movie",
      activeHover: true,
      link: true,
      onMouseMove: () => setIsActiveHoverMenu(false),
    },
    {
      title: "Сериалы",
      type: "Tv-serials",
      activeHover: false,
      link: true,
      onMouseMove: () => setIsActiveHoverMenu(false),
    },
    {
      title: "Мультфильмы",
      type: "Мультфильмы",
      activeHover: false,
      link: true,
      idCartoon: 16,
      onMouseMove: () => setIsActiveHoverMenu(false),
    },
  ];

  useEffect(() => {
    getTypeGanre(setGenre, "movie");
  }, []);

  return (
    <div
      className={
        isActiveHoverMenu
          ? `${clases.header} ${clases.activeHoverMenu}`
          : clases.header
      }
      onMouseLeave={() => setIsActiveHoverMenu(false)}
    >
      <div className="flex items-center w-1/2 ">
        <NavLink to={"/"} className="flex text-3xl">
          <span className="font-thin text-red-400">My</span>
          <span className="font-semibold -rotate-12 text-white">Logo1</span>
        </NavLink>
        <ul className="flex gap-3 ml-5">
          {headerLinks.map((hedaerLink, index) => (
            <NavLink
              key={index}
              to={
                hedaerLink.link && hedaerLink.type != "Мультфильмы"
                  ? `Type/${hedaerLink.type}`
                  : `Type/Мультфильмы/16 `
              }
              onClick={() => setTypeLink(hedaerLink.typeLink)}
            >
              <li
                className={[
                  `text-lg font-semibold hover:text-white transition cursor-pointer  , ${
                    hedaerLink.type === type ? "text-white" : ""
                  } `,
                ]}
                onMouseMove={
                  hedaerLink.activeHover
                    ? () => setIsActiveHoverMenu(true)
                    : () => setIsActiveHoverMenu(false)
                }
              >
                <span>{hedaerLink.title}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-end w-1/2 gap-6">
        {/* <div>
          <Link
            className={
              "px-4 py-3 bg-red-600 hover:bg-red-800 text-white text-sm rounded-md transition"
            }
          >
            Смотреть 60 дней бесплатно
          </Link>
        </div> */}
        <div className="flex text-lg">
          <button
            type="button"
            to={""}
            className={
              "flex items-center transition hover:text-white relative mx-5"
            }
          >
            <span>
              <IoIosSearch className="absolute -left-8 top-2 text-2xl" />
            </span>
            <span
              className=" font-semibold"
              onClick={() => setIsActiveModal(true)}
            >
              поиск
            </span>
          </button>
          <div className="bg-bg-color cursor-pointer pr-3  rounded-md p-1 text-base  text-white font-thin flex items-center gap-2 hover:bg-gray-800 transition border border-transparent">
            <span className=" p-2 rounded-md text-2xl text-gray-500  bg-bg-userIcon">
              <FaRegUser className="text-xl " />
            </span>
            <span className="text-sm font-semibold  text-gray-300 ">Войти</span>
          </div>
        </div>
      </div>
      <div>
        <Films
          ganre={ganre}
          isActiveHoverMenu={isActiveHoverMenu}
          setIsActiveHoverMenu={setIsActiveHoverMenu}
          typeLink={typeLink}
        />
      </div>
      <Modal setIsActiveModal={setIsActiveModal} isActiveModal={isActiveModal}>
        <SearchFilms isActiveModal={isActiveModal} setIsActiveModal={setIsActiveModal} />
      </Modal>
    </div>
  );
};

export default Header;
