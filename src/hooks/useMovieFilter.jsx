import { useState, useEffect } from "react";

const DATE_FILTER = "1 Jan 2000";
const IMDB_RATING = 7.5;

export const useMovieFilter = (moviesList) => {
  const [movieFilterValue, setMovieFilterValue] = useState(); //"DEFAULT"
  const [filteredMovieList, setFilteredMovieList] = useState([]);

  useEffect(() => {
    const filtersHandler = () => {
      let list = [...moviesList];
      switch (movieFilterValue) {
        case "DATE":
          // list = moviesList.sort((a, b) => {
          //   return new Date(a.Released) - new Date(b.Released);
          // });

          // Filtering movies based on the date which is a temp date - 1 Jan 2000
          list = moviesList.filter((item) => {
            return new Date(item.Released) >= new Date(DATE_FILTER);
          });
          break;

        case "RATING":
          // list = moviesList.sort((a, b) => {
          //   return parseFloat(b.imdbRating) - parseFloat(a.imdbRating);
          // });

          // Filtering movies who has movie rating above 7.5
          list = moviesList.filter((item) => {
            return parseFloat(item.imdbRating) > IMDB_RATING;
          });
          break;

        case "ALPHA_ORDER":
          // Sorting the names accordingly. Displays it in aplphabetical order
          list = moviesList.sort((a, b) => a.Title.localeCompare(b.Title));
          break;

        case "REVERSE_ALPHA_ORDER":
          // Sorting the names accordingly. Displays it in reverse aplphabetical order
          list = moviesList.sort((a, b) => b.Title.localeCompare(a.Title));
          break;

        case "DEFAULT":
          list = moviesList;
          break;

        default:
          list = moviesList;
          break;
      }
      console.log("list",list);
      setFilteredMovieList([...list]);
    };

    filtersHandler();
  }, [movieFilterValue, moviesList]);

  return { movieFilterValue, setMovieFilterValue, filteredMovieList };
};
