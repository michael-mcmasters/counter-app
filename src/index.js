// React is an object imported from the 'react' module. It is needed to compile jsx into Javascript.
import React from "react";
// Import this to send jsx code that was converted to virtual DOM to the real DOM
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

ReactDOM.render(<Counter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
