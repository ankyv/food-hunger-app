import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo(resId);
  }, []);

  async function getRestaurantInfo(resId) {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=281469"
    );
    const json = await response.json();
    // console.log(json);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div className="restaurant-details">
        <div className="restaurant-image">
          <img
            className="restaurant-image"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
              restaurant?.cloudinaryImageId
            }
          />
        </div>
        <div className="restaurant-info">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p>{restaurant?.cuisines.join(", ")}</p>
          <h4>{restaurant?.avgRating} stars</h4>
          <h4>{restaurant?.costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
