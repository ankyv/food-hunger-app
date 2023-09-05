import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { API_DATA_URL } from "../constants";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState(null);

  const [filteredRestaurants, setFilteredRestaurants] =
    useState(allRestaurants);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(API_DATA_URL);
    const json = await response.json();
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    let restaurantData;

    for (let i = 0; i < json?.data?.cards.length; i++) {
      restaurantData =
        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurantData !== undefined) {
        break;
      }
    }

    setAllRestaurants(restaurantData);
    setFilteredRestaurants(restaurantData);
  }

  return !allRestaurants ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
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
          <h4>
            Oops! We could not understand what you mean, try rephrasing the
            query
          </h4>
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
  );
};

export default Body;
