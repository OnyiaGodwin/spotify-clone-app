import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";

import { DataLayer } from "./use-Context/DataLayer";
import reducer, { initialState } from "./use-Context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//       <div>
//         <App />
//     </div>
// );
