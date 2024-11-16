import React, { useState } from "react";
import clases from "./Header.module.css";
import { Button } from "@mui/material";
import HomeListFilms from "../Page/Home/HomeListFilms";

const HeaderTabs = ({
  headerTabsByHoverMenuFilms,
  apiGetPopular,
  apiGenres,
  apiBestRating
}) => {
  const [activeHoverMenu, setActiveHoverMenu] = useState(1);
  return (
    <div className={clases.headerTabs}>
      <div className="flex gap-2">
        {headerTabsByHoverMenuFilms.map((tab) => (
          <div key={tab.id}>
            <Button
              variant={activeHoverMenu === tab.id ? "contained" : "outlined"}
              onClick={() => setActiveHoverMenu(tab.id)}
            >
              {tab.title}
            </Button>
          </div>
        ))}
      </div>
      <div className={clases.tabs_wrapper}>
        {activeHoverMenu === 1 ? (
          <HomeListFilms
            dataList={apiGetPopular}
            type={"movie"}
            genres={apiGenres.data}
          />
        ) : (
          ""
        )}
        {activeHoverMenu === 2 ? (
          <HomeListFilms
            dataList={apiBestRating}
            type={"movie"}
            genres={apiGenres.data}
          />
        ) : (
          ""
        )}
        {activeHoverMenu === 3 ? 
            <div>
                <p>3</p>
            </div> 
            : ""}
      </div>
    </div>
  );
};

export default HeaderTabs;
