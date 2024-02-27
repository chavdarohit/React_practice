const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "hey there this is element from the React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
