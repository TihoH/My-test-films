import React, { useEffect, useState } from "react";
import MyInput from "../UI/MyInput";
import { getSearchFilms } from "../../API/getFilms";
import { useDebounce } from "../Helpers/useDebounce";
import SearchListItem from "./SearchListItem";
import { NavLink } from "react-router-dom";
import clases from "./SearchStyle.module.css";
import Preloader from "../UI/Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";

const SearchFilms = ({ setIsActiveModal }) => {
  const [dataSearch, setDatasearch] = useState([]);
  const [dataValue, setDataValue] = useState("");
  const myDobounce = useDebounce(dataValue, 1500);
  const [isActivePreloader, setIsActivePreloader] = useState(false);
  const [pageLimit, setPageLimit] = useState(15);
  // const dispatch = useDispatch()
  // const {value} = useSelector( state => state.getDataSlice )

  const getFilms = async (myDobounce, pageLimit) => {
    setIsActivePreloader(true);
    const response = await getSearchFilms(myDobounce, pageLimit);
    setDatasearch(response.results);
    setIsActivePreloader(false);
  };

  useEffect(() => {
    getFilms(myDobounce , pageLimit);
    
  }, [myDobounce, pageLimit]);

  return (
    <div className={clases.searchApp}>
      <div className={clases.myInputSearch}>
        <MyInput
          placeholder={"Поиск"}
          type={"text"}
          className={` w-full border outline-none  py-2 px-2 rounded-md text-black`}
          value={dataValue}
          dataValue={setDataValue}
        />
        {dataValue && isActivePreloader ? <Preloader  className={'mt-2'}/> : null}

      </div>
      {!dataValue && !dataSearch.length ? (
        <h1 className="text-xl mt-2">Введите запрос </h1>
      ) : null}
      <ul className={clases.search_wrapperList}>
        
        {dataSearch?.map((searchItem) => (
          <li key={searchItem.id}>
            <NavLink
              to={"AboutFilm/Type/Movie/" + searchItem.id}
              key={searchItem.id}
              onClick={() => setIsActiveModal(false)}
            >
              <SearchListItem
                searchItem={searchItem}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    { dataSearch.length ?   <div>
        <button
          className="w-full border border-gray-500 py-2 rounded-md hover:bg-black hover:text-white transition mt-20"
          onClick={() => setPageLimit( pageLimit + 10 )}
        >
          Показать больше
        </button>
      </div> : null }
    </div>
  );
};

export default SearchFilms;
