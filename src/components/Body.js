import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const restaurantList = useRestaurantList();
  const isOnline = useOnline();

  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setAllRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  }, [restaurantList]);

  if (!isOnline) {
    return (
      <div className="offline">
        <h2>Connection Error</h2>
        <p>Please check your internet connection and try again</p>
      </div>
    );
  }

  return !allRestaurants ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="container">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const filteredData = filterData(allRestaurants, searchText);
              setFilteredRestaurants(filteredData);
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
          {filteredRestaurants.length === 0 ? (
            <p className="no-restaurant-text">
              Oops! We could not understand what you mean, try rephrasing the
              query
            </p>
          ) : (
            filteredRestaurants?.map((restaurant) => (
              <Link
                key={restaurant?.info?.id}
                to={"/restaurant/" + restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
