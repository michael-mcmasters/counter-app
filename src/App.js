import React from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

// Use <React.Fragment> because we are returning multiple root elements (<NavBar> and <main> are examples of root elements).
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
