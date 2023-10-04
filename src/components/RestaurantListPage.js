import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Offline from "./Offline";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useRestaurantList from "../utils/useRestaurantList";
import SearchContainer from "./SearchContainer";
import NoRestaurant from "./NoRestaurant";

const RestaurantListPage = () => {
  const restaurantList = useRestaurantList();
  const isOnline = useOnline();

  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  useEffect(() => {
    setAllRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  }, [restaurantList]);

  function handleFilteredRestaurants(filteredRestaurants) {
    setFilteredRestaurants(filteredRestaurants);
  }

  if (!isOnline) {
    return <Offline />;
  }
  if (!allRestaurants) {
    return <Shimmer />;
  }

  return (
    <div className="main">
      <div className="container">
        <SearchContainer
          allRestaurants={allRestaurants}
          handleFilteredRestaurants={(filteredRestaurants) => {
            handleFilteredRestaurants(filteredRestaurants);
          }}
        />
        <div className="restaurant-list">
          {filteredRestaurants.length === 0 ? (
            <NoRestaurant />
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

export default RestaurantListPage;
