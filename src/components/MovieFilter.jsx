import FilterList from "./FilterList";
import "./movieFilter.css";

const MovieFilter = () => {
  const MOVIE_FILTER = [
    { value: 1, name: "Release Date" },
    { value: 2, name: "Rating" },
  ];
  const SORT_FILTER = [
    { value: 3, name: "Alphabetical order" },
    { value: 4, name: "Reverse alphabetical order" },
  ];

  const SORT_HEADERS_1="Filter movies by";
  const SORT_HEADERS_2="Sort results";

  return (
    <div>
      <div className="filters-container">
        <div className="filter">
          <div>
            <FilterList filterList={MOVIE_FILTER} sortHeader={SORT_HEADERS_1}/>
          </div>
          <div>
            <FilterList filterList={SORT_FILTER}  sortHeader={SORT_HEADERS_2}/>
          </div>
        </div>
      </div>
      <div className="movie-display-container"></div>
    </div>
  );
};

export default MovieFilter;
