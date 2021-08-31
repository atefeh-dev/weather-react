/** @format */

import "./Style/App.css";
import React from "react";
import Search from "./components/Search";
import Overview from "./components/Overview";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <div className="container border mt-5">
        <Search />
        <Overview />
      </div>
      <Footer/>
    </div>
  );
};
export default App;
