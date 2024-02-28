import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "hey there this is element "
);

const container = React.createElement(
  "div",
  {
    id: "inside-root",
  },
  [heading]
);

const HeaderFunctional = () => <h1>hii there this is functional component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderFunctional />);
