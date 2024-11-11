import React, { useState } from "react";
import clases from "./SearchStyle.module.css";

const SearchListItem = ({ searchItem }) => {
  return (
    <div className={clases.searchList_item}>
      <div className={clases.searchList_item_wrapper}>
        <img
          src={" https://image.tmdb.org/t/p/w500/" + searchItem.poster_path}
          alt=""
        />
         <h6>{searchItem.title || searchItem.name}</h6>
        <div className={clases.showInfoItemList}>
          <span>Дата выпуска: </span>
          <span>{searchItem?.release_date || searchItem.first_air_date}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
