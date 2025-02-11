import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";

// const reactElement = {           This does not get rendered by react
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

function MyApp() {
  return (
    <>
      <h2>Custom Duties</h2>
    </>
  );
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

// this is how react render custom render that we defined is not rendered
const actualreactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click to visit google"
);

ReactDOM.createRoot(document.getElementById("root"))
  .render(

  // <MyApp/> //run ok       MyApp() also run fine
  //   AnotherElement              //this run ok as it is a object
  <App/>
  );
