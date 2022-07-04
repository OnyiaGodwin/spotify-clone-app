//export const authEndpoint = "https://accounts.spotify.com/authorize";
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/callback/";
//const redirectUri = "http://localhost:3000/";

const clientId = "c95be597d6a64bf4be64891efc9ba5bd";
//const clientID = "[redacted]";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-library-read",
  "user-library-modify",
];

// const scopes = [
//     "user-library-read",
//     "user-library-modify",
//     "user-read-playback-state",
//     "user-read-currently-playing",
//     "user-read-recently-played",
//     "user-top-read",
//     "user-modify-playback-state"
//   ];

export const getTokeFromUrl = () => {
  return window.location.hash
  .substring(1)
  .split('&')
  .reduce((initialValue, curValue) => {
    let parts = curValue.split('=');
    initialValue[parts[0]] = decodeURIComponent(parts[1]);

    return initialValue;
  }, {});

};


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// export const loginUrl = `${authEndpoint}?client_id=${clientID}&response_type=code&redirect_uri=${redirectUri}&scopes=${scopes.join(
//   "%20"
// )}&show_dialog=true`;

