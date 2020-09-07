import React from "react";
import ReactDOM from "react-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
// import "./styles.scss";
// import App from "./App";

function Button(props: any) {
  return <button className="render_button">{props.children}</button>;
}

function App() {
  return (
    <div>
      <Button>
        <FaStar /> Add
      </Button>
      <Button>
        <FaRegStar /> Subtract
      </Button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
