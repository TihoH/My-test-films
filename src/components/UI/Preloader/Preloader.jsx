import React from "react";
// import clases from './PreloaderStyle.module.css'
import "./PreloaderStyle.css";

const Preloader = ({ ...props }) => {
  return (
    <div id="followingBallsG" {...props}>
      <div id="followingBallsG_1" class="followingBallsG"></div>
      <div id="followingBallsG_2" class="followingBallsG"></div>
      <div id="followingBallsG_3" class="followingBallsG"></div>
      <div id="followingBallsG_4" class="followingBallsG"></div>
    </div>
  );
};

export default Preloader;
