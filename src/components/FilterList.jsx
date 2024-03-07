import "../styles/filterList.css";

// This component uses select tag to display the options
// The options are received as props.
// Once the option is selected a value is selected and a 
// prop (setMovieFilterValue) is updated
// Other props include constant values such as header names
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
