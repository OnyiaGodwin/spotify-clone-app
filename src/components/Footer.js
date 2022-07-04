import React from "react";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material";
import VolumeDownIcon from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";

import classes from "./Footer.module.css";
//import { useDataLayerValue } from "../use-Context/DataLayer";

function Footer() {
  //const [{ playlists }] = useDataLayerValue;

  return (
    <div className={classes.footer}>
      <div className={classes.footer__left}>
        <img src="" alt="image" />
        <div className={classes.footer__songInfo}>
          <h4></h4>
          <p></p>
        </div>
      </div>

      <div className={classes.footer__center}>
        <ShuffleIcon className={classes.footer__green} />
        <SkipPreviousIcon className={classes.footer__icon} />
        <PlayCircleOutlineIcon
          fontSize="large"
          className={classes.footer__icon}
        />
        <SkipNextIcon className={classes.footer__icon} />
        <RepeatIcon className={classes.footer__green} />
      </div>

      <div className={classes.footer__right}>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
