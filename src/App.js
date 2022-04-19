import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import Header from "./Header";
import Feed from "./Feed";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
