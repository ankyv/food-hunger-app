import { useState } from "react";
import { filterData } from "../utils/helper";

const SearchContainer = ({ allRestaurants, handleFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search for restaurants"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          const filteredRestaurants = filterData(
            allRestaurants,
            e.target.value
          );
          handleFilteredRestaurants(filteredRestaurants);
        }}
      />
      <button
        className="search-btn"
        onClick={() => {
          const filteredRestaurants = filterData(allRestaurants, searchText);
          handleFilteredRestaurants(filteredRestaurants);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchContainer;
