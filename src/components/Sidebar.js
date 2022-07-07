import React from "react";

import classes from "./Sidebar.module.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from "../use-Context/DataLayer";

function Sidebar() {
  const [{ playlists }] = useDataLayerValue();


  return (
    <div className={classes.sidebar}>
      <img
        className={classes.sidebar__logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon}/>
      <SidebarOption title="Search" Icon={SearchIcon}/>
      <SidebarOption title="Library" Icon={LibraryMusicIcon}/>

      <br />
      <strong className={classes.sidebar__title} >PLAYLISTS</strong>
      <hr />     {/**This adds a horizontal line */}

      {playlists?.items?.map((playlist) => {
        return (
        <SidebarOption title={playlist.name} />
        )
      })}
    </div>
  );
}

export default Sidebar;
