import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);

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
            const filteredData = filterData(restaurants, searchText);
            setRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
