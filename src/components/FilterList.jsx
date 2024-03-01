import "./filterList.css";

const FilterList = () => {
  return (
    <div>
      <div className="filter-container">
        <label for="cars">Filter movies by: </label>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  );
};

export default FilterList;
