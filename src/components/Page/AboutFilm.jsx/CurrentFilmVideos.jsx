import React from "react";
import clases from "./AboutFilm.module.scss";

const CurrentFilmVideos = ({ dataVideo }) => {

  return (
    <div className="w-full">
      <h3 className="text-3xl mt-3 mb-3"> Трейлер</h3>
      <iframe
        className={clases.aboutFilm_iframe}
        src={`https://www.youtube.com/embed/` + dataVideo.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CurrentFilmVideos;
