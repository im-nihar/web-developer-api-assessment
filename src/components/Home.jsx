import { useState } from "react";
import MovieFilter from "./MovieFilter";

import "./home.css";

const Home = () => {
  const getData = () => {
    // const response =await
  };

  return (
    <div className="container">
      <div className="header-container">
        <h1>Latest Movies</h1>
      </div>
      <div >
        <MovieFilter />

       <div>

       </div>
      </div>
    </div>
  );
};

export default Home;
