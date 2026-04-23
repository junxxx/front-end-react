import React from "react";
import ReactDom from "react-dom/client";
import { print } from "./tool.js";

print("Hello")

const App = () => {
  return React.createElement("h1", null, "Hello React");
};

ReactDom.createRoot(document.getElementById("root")).render(
  React.createElement(App),
);
