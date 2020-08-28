// React is an object imported from the 'react' module. It is needed to compile jsx into Javascript.
import React from "react";
// Import this to send jsx code that was converted to virtual DOM to the real DOM
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Bootstrap: A CSS library that gives our application a modern look and feel.
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

ReactDOM.render(<Counters />, document.getElementById("root"));
serviceWorker.unregister();
