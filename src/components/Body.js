import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="main">
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
