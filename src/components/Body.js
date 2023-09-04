import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState(restaurantList);

  const [filteredRestaurants, setFilteredRestaurants] =
    useState(allRestaurants);

  const [searchText, setSearchText] = useState("");

  function filterData(restaurants, searchText) {
    return restaurants?.filter((restaurant) => {
      return restaurant?.info?.name
        ?.toLowerCase()
        ?.includes(searchText?.toLowerCase());
    });
  }

  return (
    <div className="main">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredData = filterData(allRestaurants, searchText);
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
