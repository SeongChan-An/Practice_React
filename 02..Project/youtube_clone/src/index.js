import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Youtube from "./service/youtube";
const API_KEY = require("./config/googleAPI.json");

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
// const youtube = new Youtube(`${API_KEY.googleApiKeys}`);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
