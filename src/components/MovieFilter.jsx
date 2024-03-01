import FilterList from "./FilterList";
import "./movieFilter.css";

const MovieFilter = () => {
  return (
    <div>
      <div className="filters-container">
        <div className="filter">
          <div>
            <FilterList />
          </div>
          <div>
            <FilterList />
          </div>
        </div>
      </div>
      <div className="movie-display-container"></div>
    </div>
  );
};

export default MovieFilter;
