import { useEffect, useState } from "react";
import MovieFilter from "./MovieFilter";

import "./home.css";

const KEY = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [moviesList, setMoviesList] = useState([]); //MOIVELIST1
  const [isLoading, setIsLoading] = useState(false);

  // API to get movies data list
  const MOVIE_URL = `http://www.omdbapi.com/?apikey=${KEY}&s=batman`;

  //API to get single movie data with movie ID
  const SINGLE_MOVIE_URL = `http://www.omdbapi.com/?apikey=${KEY}&i=`;

  useEffect(() => {
    getData();
  }, []);

  //   Function to fetch data from the given URL
  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(MOVIE_URL);
      const data = await response.json();
      // setMoviesList(data.Search);
      const imdbIDs = data.Search.map((movie) => movie.imdbID);
      movieDetailsHandler(data.Search, imdbIDs);
    } catch {
      console.error(`Error fetching movie details`);
      setIsLoading(false);
    }
  };

  // Function to manipulate the movie data
  // Uses movie ID to find and add the correct movie to the list
  // This is because all the data will be in one state
  const movieDetailsHandler = (movieData, imdbIDs) => {
    let movieList = [];
    getAllMovieDetails(imdbIDs)
      .then((movieDetails) => {
        let items = movieDetails.forEach((ele) => {
          let eleId = ele.imdbID;
          let obj = movieData.find((object, index) => {
            if (object.imdbID == eleId) {
              ele["extraMovieDetails"] = object;
              movieList.push(ele);
            }
          });
        });
        setMoviesList(movieList);
        setIsLoading(false);
      })
      .catch((error) => {
        setMoviesList([]); // empty list display on error
        console.error(`Error fetching movie details: ${error.message}`);
        setIsLoading(false);
      });
  };

  // Fetch details of each movie from the given
  // Movie ID is used as a parameter
  const getMovieDetails = async (imdbID) => {
    try {
      const response = await fetch(`${SINGLE_MOVIE_URL}${imdbID}`);
      return response.json();
    } catch (error) {
      console.error(
        `Error fetching data for IMDb ID ${imdbID}: ${error.message}`
      );
    }
  };

  // Function to make API calls for all movie ID's
  // Returns an array with promises for all movies once successful
  const getAllMovieDetails = async (imdbIDs) => {
    const movieDetailsPromises = imdbIDs.map((imdbID) =>
      getMovieDetails(imdbID)
    );
    const movieDetails = await Promise.all(movieDetailsPromises);
    return movieDetails;
  };

  return (
    <div className="container">
      <div className="header-container">
        <h1>Latest Movies Reviews</h1>
      </div>
      <div>
        {isLoading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="movie-filters-container">
            <MovieFilter
              moviesList={moviesList} //moviesList
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
