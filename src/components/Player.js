import React from "react";
import classes from "./Player.module.css";

import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer"

const Player = ({ spotify }) => {   
  return (
    <div className={classes.player}>
      <div className={classes.player__body}>
        {/** Sidebar*/}
        <Sidebar></Sidebar>

        {/** Body */}
        <Body spotify={spotify}></Body>
      </div>

      {/** Footer */}
      <Footer />
    </div>
  );
};

export default Player;
