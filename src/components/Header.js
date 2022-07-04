import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDataLayerValue } from "../use-Context/DataLayer";

import classes from "./Header.module.css";


function Header() {
    const [{ user }, dispatch] = useDataLayerValue;

  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        <SearchIcon />
        <input placeholder="Search for Artists, Songs or Podcast" type="text" />
      </div>

      <div className={classes.header__right}>
        <AccountCircleIcon src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
