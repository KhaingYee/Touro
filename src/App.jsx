import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/SearchDiv";
import Popular from "./components/Popular/Popular";
import Show from "./components/Show/Show";
import Explore from "./components/Explore/Explore";
import CardBox from "./components/CardBox/CardBox";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Popular />
      <Show />
      <Explore />
      <CardBox />
      <Gallery />
    </div>
  );
};

export default App;
