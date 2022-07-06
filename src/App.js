import React, { useEffect, /*useState*/ } from "react";

import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login";
import { getTokeFromUrl } from "./spotify";

import classes from "./App.module.css";
import Player from "./components/Player";
import { useDataLayerValue } from "./use-Context/DataLayer";


// Spotify ID: Client ID 142364f3fdd541acbefaab7f97dee83a

const spotify  = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);

  const [{ user, token }, dispatch ] = useDataLayerValue(); 

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokeFromUrl();

    // To clear the access token in the hash, we have
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      //setToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      // Using the spotify Api to connect spotify to react
      spotify.setAccessToken(_token);

      // Getting the user's account, we have
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      // Getting user playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcBKXpfn2OnsQ").then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });
    }
    console.log('show me the user:', user)
  }, []);

  console.log('user:', user)
  
  return (
    <div className={classes.app}>
      {token ? (<Player></Player>) : (<Login />)}
    </div>
  );
}

export default App;
