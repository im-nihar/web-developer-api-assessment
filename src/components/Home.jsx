import { useEffect, useState } from "react";
import MovieFilter from "./MovieFilter";
import MovieCard from "./MovieCard";

import "./home.css";

const KEY = "f540e9ee";

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const url = `http://www.omdbapi.com/?apikey=${KEY}&s=batman`;



  useEffect(() => {
    // getData();
  }, []);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    setMoviesList(data.Search);

    const imdbIDs = data.Search.map((movie) => movie.imdbID);
    console.log("imdbIDs", imdbIDs);

    getAllMovieDetails(imdbIDs)
      .then((movieDetails) => {
        console.log("movieDetails-->>>", movieDetails);

        let items = movieDetails.forEach((ele) => {
          console.log("elelelelele", ele);
        });
      })
      .catch((error) => {
        console.error(`Error fetching movie details: ${error.message}`);
      });
  };

  const getMovieDetails = async (imdbID) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${imdbID}`
      );
      //   console.log("response.data", response.json());
      return response.json();
    } catch (error) {
      console.error(
        `Error fetching data for IMDb ID ${imdbID}: ${error.message}`
      );
    }
  };

  // Function to make API calls for all IMDb IDs
  const getAllMovieDetails = async (imdbIDs) => {
    const movieDetailsPromises = imdbIDs.map((imdbID) =>
      getMovieDetails(imdbID)
    );
    console.log("movieDetailsPromises----", movieDetailsPromises);
    const movieDetails = await Promise.all(movieDetailsPromises);
    console.log("getAllMovieDetails--->>>>>>>", movieDetails);
    return movieDetails;
  };

  //   // Calling the function to get details for all IMDb IDs
  //   getAllMovieDetails(imdbIDs)
  //     .then((movieDetails) => {
  //       console.log(movieDetails);
  //     })
  //     .catch((error) => {
  //       console.error(`Error fetching movie details: ${error.message}`);
  //     });

  return (
    <div className="container">
      <div className="header-container">
        <h1>Latest Movies</h1>
      </div>
      <div>
        <MovieFilter />

        <div>
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
