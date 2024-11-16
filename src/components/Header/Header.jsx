import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import Films from "./Films";
import clases from "./Header.module.css";
import Modal from "../ModalWindow/Modal";
import SearchFilms from "../SearchFilms/SearchFilms";
import { useGetGanres } from "../../API/hooks/UseGetData";

const Header = () => {
  const [isActiveHoverMenu, setIsActiveHoverMenu] = useState(false);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [typeLink, setTypeLink] = useState("");
  const [activeBurgetMenu, setActiveBurgerMenu] = useState(false);
  const { type } = useParams();
  const apiGenres = useGetGanres(type);
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
  const headerTabsByHoverMenuFilms = [
    { title: "Популярные", id: 1 },
    { title: "Высокий рейтинг", id: 2 },
    { title: "3", id: 3 },
  ];

  return (
    <div
      className={
        isActiveHoverMenu
          ? `${clases.header} ${clases.activeHoverMenu}`
          : clases.header
      }
      onMouseLeave={() => setIsActiveHoverMenu(false)}
    >
      <div className="flex items-center">
        <NavLink to={"/"} className="sm:text-3xl flex text-xl">
          <span className="font-thin text-red-400">My</span>
          <span className="font-semibold -rotate-12 text-white">Logo1</span>
        </NavLink>
        {/* activeBurgerMenu */}
        <ul
          className={
            activeBurgetMenu
              ? `${clases.headerLinks} ${clases.activeBurgerMenu}`
              : `${clases.headerLinks}`
          }
        >
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
                <span className={clases.headerLinkTitle}>{hedaerLink.title}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <div className="flex text-lg">
          <button
            type="button"
            to={""}
            className={
              "flex items-center transition hover:text-white relative mx-5"
            }
            onClick={() => setIsActiveModal(true)}
          >
            <span>
              <IoIosSearch className="absolute -left-8 top-2 text-2xl" />
            </span>
       
            <span
              className=" font-semibold"
             
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
          <div
            className={clases.btnBurgerMenu}
            onClick={() => setActiveBurgerMenu(!activeBurgetMenu)}
          >
            <button class={clases.burger}></button>
          </div>
        </div>
      </div>
      <Films
        ganre={apiGenres.data}
        isActiveHoverMenu={isActiveHoverMenu}
        setIsActiveHoverMenu={setIsActiveHoverMenu}
        typeLink={typeLink}
        headerTabsByHoverMenuFilms={headerTabsByHoverMenuFilms}
      />
      <Modal setIsActiveModal={setIsActiveModal} isActiveModal={isActiveModal}>
        <SearchFilms
          isActiveModal={isActiveModal}
          setIsActiveModal={setIsActiveModal}
        />
      </Modal>
    </div>
  );
};

export default Header;
