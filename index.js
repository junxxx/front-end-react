import React from "react";
import ReactDom from "react-dom/client";
import { localTest } from "./test.js";
import localDefaultTest from "./test.js";

const App = () => {
  localTest();
  localDefaultTest();
  return React.createElement("h1", null, "Hello React");
};

ReactDom.createRoot(document.getElementById("root")).render(
  React.createElement(App),
);
