/** @format */

import "./Style/App.css";
import React from "react";
import Search from "./components/Search";
import Overview from "./components/Overview";
const App = () => {
  return (
    <div className="container border mt-5">
      <Search />
      <Overview />
    </div>
  );
};
export default App;
