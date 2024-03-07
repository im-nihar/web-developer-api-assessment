import { useEffect, useState } from "react";
import { useMovieFilter } from "../hooks/useMovieFilter";
import FilterList from "./FilterList";
import MovieCard from "./MovieCard";
import * as myConsts from "../constants/consts";
import "./movieFilter.css";

const MovieFilter = ({ moviesList }) => {
  const { movieFilterValue, setMovieFilterValue, filteredMovieList } =
    useMovieFilter(moviesList);

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
