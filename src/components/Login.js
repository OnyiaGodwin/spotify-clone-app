import React from "react";

import { loginUrl } from "../spotify";

import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.login}>
      {/** Spotify Logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      {/** Login with spotify button */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
