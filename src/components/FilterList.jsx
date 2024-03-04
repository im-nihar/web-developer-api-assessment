import "./filterList.css";

const FilterList = ({
  filterList,
  sortHeader,
  setMovieFilterValue,
  movieFilterValue,
}) => {
  const movieFilterHandler = (value) => {
    setMovieFilterValue(value);
  };

  return (
    <div className="filter-container">
      <label>{sortHeader}: </label>
      <select
        name="filters"
        id="filters"
        className="filters-select"
        value={movieFilterValue}
        onChange={(e) => movieFilterHandler(e.target.value)}
        // defaultValue={filterList[0].value}
      >
        {filterList.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterList;
