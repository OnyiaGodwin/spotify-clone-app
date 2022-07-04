import React from 'react';

import Header from './Header';
import classes from './Body.module.css';

function Body({ spotify }) {    //Note how this props(spotify) is passed from <Player> without using props
  

  return (
    <div className={classes.body}>
      <Header spotify={spotify} />
    </div>
  );
};

export default Body;