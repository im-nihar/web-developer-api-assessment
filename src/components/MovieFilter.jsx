import { useEffect, useState } from "react";
import FilterList from "./FilterList";
import MovieCard from "./MovieCard";
import "./movieFilter.css";

const MOVIE_FILTER = [
  { value: "DEFAULT", name: "Choose a movie filter" },
  { value: "DATE", name: "Release Date" },
  { value: "RATING", name: "Rating" },
];

const SORT_FILTER = [
  { value: "DEFAULT", name: "Choose a sorting filter" },
  { value: "ALPHA_ORDER", name: "Alphabetical order" },
  { value: "REVERSE_ALPHA_ORDER", name: "Reverse alphabetical order" },
];

const SORT_HEADERS_1 = "Filter movies by";
const SORT_HEADERS_2 = "Sort results";

const MovieFilter = ({ moviesList }) => {
  const [movieFilterValue, setMovieFilterValue] = useState(undefined); //"DEFAULT"
  const [filteredMovieList, setFilteredMovieList] = useState([]);

  useEffect(() => {
    filtersHandler();
  }, [movieFilterValue, moviesList]);

  const filtersHandler = () => {
    let list = [...moviesList];
    switch (movieFilterValue) {
      case "DATE":
        list = moviesList.sort((a, b) => {
          return new Date(a.Released) - new Date(b.Released);
        });
        break;

      case "RATING":
        list = moviesList.sort((a, b) => {
          return parseFloat(b.imdbRating) - parseFloat(a.imdbRating);
        });
        break;

      case "ALPHA_ORDER":
        list = moviesList.sort((a, b) => a.Title.localeCompare(b.Title));
        break;

      case "REVERSE_ALPHA_ORDER":
        list = moviesList.sort((a, b) => b.Title.localeCompare(a.Title));
        break;

      case "DEFAULT":
        list = moviesList;
        break;

      default:
        list = moviesList;
        break;
    }
    setFilteredMovieList([...list]);
  };

  const renderNoList = () => {
    return <h1>No Record Present</h1>;
  };

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
              filterList={MOVIE_FILTER}
              sortHeader={SORT_HEADERS_1}
              setMovieFilterValue={setMovieFilterValue}
              movieFilterValue={movieFilterValue}
            />
          </div>
          <div className="align-filters">
            <FilterList
              filterList={SORT_FILTER}
              sortHeader={SORT_HEADERS_2}
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
