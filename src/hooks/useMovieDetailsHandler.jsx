// Hook which finds movies from imdbs ratings array
// It can perfrom data manipulation on movies found
import { fetchData } from "../service/service";
import { useState, useEffect } from "react";
import { getAllMovieDetails } from "../service/service";

export const useMovieDetailsHandler = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData();
        const imdbIDs = data.Search.map((movie) => movie.imdbID);
        let moviesList = data.Search;
        const movieDetails = await getAllMovieDetails(imdbIDs);
        const updatedMoviesList = [];
        movieDetails.forEach((ele) => {
          const eleId = ele.imdbID;
          moviesList.find((object, index) => {
            if (object.imdbID == eleId) {
              updatedMoviesList.push(ele);
            }
          });
        });

        setMoviesList(updatedMoviesList);
        setIsLoading(false);
      } catch (error) {
        setMoviesList([]); // Empty list displayed on error
        console.error(`Error fetching movie details: ${error.message}`);
        setIsLoading(false);
      }
    };

    fetchMovieData();
  }, []);

  return { moviesList, isLoading };
};
