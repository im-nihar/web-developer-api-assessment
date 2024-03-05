import { useEffect, useState } from "react";
import FilterList from "./FilterList";
import MovieCard from "./MovieCard";
import * as myConsts from "../constants/consts";
import "./movieFilter.css";

const DATE_FILTER = "1 Jan 2000";

const MovieFilter = ({ moviesList }) => {
  const [movieFilterValue, setMovieFilterValue] = useState(undefined); //"DEFAULT"
  const [filteredMovieList, setFilteredMovieList] = useState([]);

  useEffect(() => {
    filtersHandler();
  }, [movieFilterValue, moviesList]);


// Function to handle the filters
// Filter by date and rating. Here the date and rating are hardcoded. 
// Sort by alphabetical and reverse aplhabetical order
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
          return parseFloat(item.imdbRating) > 7.5;
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
    // console.log("list--->>", list);
    setFilteredMovieList([...list]);
  };

  // Renders a statement when there is no data present
  const renderNoList = () => {
    return <h1>No Record Present</h1>;
  };

  // Renders the movie list
  // A moviecard component is used to display the movie details
  const renderList = () =>
    filteredMovieList?.map((movie, index) => {
      return (
        <div key={index}>
          <MovieCard movie={movie} />
        </div>
      );
    });

  return (
    <div>
      <div className="filters-container">
        <div className="filter">
          <div className="align-filters">
            <FilterList
              filterList={myConsts.MOVIE_FILTER}
              sortHeader={myConsts.SORT_HEADERS_1}
              setMovieFilterValue={setMovieFilterValue}
              movieFilterValue={movieFilterValue}
            />
          </div>
          <div className="align-filters">
            <FilterList
              filterList={myConsts.SORT_FILTER}
              sortHeader={myConsts.SORT_HEADERS_2}
              setMovieFilterValue={setMovieFilterValue}
              movieFilterValue={movieFilterValue}
            />
          </div>
        </div>
      </div>
      <div className="movie-display-container">
        <div>
          {filteredMovieList.length == 0 ? (
            <div>{renderNoList()}</div>
          ) : (
            <div className="movies-list">{renderList()}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieFilter;
