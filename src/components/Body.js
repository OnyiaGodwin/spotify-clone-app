import React from "react";

import Header from "./Header";
import classes from "./Body.module.css";
import SongRow from "./SongRow";
import { useDataLayerValue } from "../use-Context/DataLayer";

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({ spotify }) {  //Note how this props(spotify) is passed from <Player> without using props
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className={classes.body}>
      <Header spotify={spotify} />

      <div className={classes.body__info}>
        <img
          src={discover_weekly?.images[0].url}
          alt=""
        />
        <div className={classes.body__infoText}>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className={classes.body__songs} >
        <div className={classes.body__icons}>
          <PlayCircleFilledIcon className={classes.body__shuffle} />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => {
          return (
            <SongRow track={item.track} />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
