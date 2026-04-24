import React from "react";
import ReactDom from "react-dom/client";
import { localTest } from "./test.js";
import localDefaultTest from "./test.js";
import { Card } from "./components/card.jsx";

const App = () => {
  localTest();
  localDefaultTest();
  React.createElement("h1", null, "Hello React");
  return (
    <div>
      <Card />
    </div>
  );
};

ReactDom.createRoot(document.getElementById("root")).render(
  React.createElement(App),
);
