import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./ComponentsSimpleState/App"
// import App from "./ComponentsContextApi/App"
// import App from "./ComponentsReactRedux/App"

// import FirstTry from "./FirstTry";
console.clear();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  rootElement
);
