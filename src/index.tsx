import React from "react";
import ReactDOM from "react-dom";
import { FaStar } from "react-icons/fa";
// import "./styles.scss";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

const Button = () => (
  <button className="render_button">
    <FaStar />
    <span>Add</span>
  </button>
);

const domElement = document.getElementById("root");
ReactDOM.render(<Button />, domElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
