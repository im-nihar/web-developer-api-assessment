import "./filterList.css";

const FilterList = ({ filterList, sortHeader }) => {
  return (
    <div>
      <div className="filter-container">
        <label>{sortHeader}: </label>
        <select name="filters" id="filters" className="filters-select">
          {filterList.map((item, index) => {
            return <option value={item.value}>{item.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterList;
