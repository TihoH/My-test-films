import React, { useMemo, useState } from "react";
import clases from "./SortItem.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, useParams } from "react-router";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SortItem = ({ title, dataSort , typeSort , setData , sortRating}) => {
  const { categories , type , id} = useParams();

  return (
    <div className={clases.sortItem}>
      <p className={clases.sortItem_title}>{ title?.name ? title.name : title }</p>
      <p> 
        <IoIosArrowDown className={clases.sortItem_icon_arrow} />
      </p>
      {dataSort ? (
        <ul className={clases.sortItem_showSortData}>
          {dataSort?.map((data, index) => (
            <NavLink
              key={index}
              onClick={() =>
                setData( typeSort === 'rating' ?  {...sortRating , name: data.name , sort: data.sort} : data.name ) ||
                ''
              }
              to={ typeSort != 'yaers' ? `/type/${typeSort}/` + data.id : '' }
            >
              <li className="flex w-full justify-between items-center">
                <span>{data.name}</span>
                <span className="text-green-400">
                  {categories === data.name ? (
                    <span>
                      <IoMdCheckmarkCircleOutline />{" "}
                    </span>
                  ) : (
                    ""
                  )}
               
                </span>
              </li>
            </NavLink>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default SortItem;
