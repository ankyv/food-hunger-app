import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  const restaurantInfo = restaurant?.cards[0]?.card?.card?.info;

  const restaurantMenu =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  useEffect(() => {
    getRestaurantInfo(resId);
  }, []);

  async function getRestaurantInfo(resId) {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId
    );
    const json = await response.json();
    // console.log(json);
    setRestaurant(json?.data);
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
              restaurantInfo?.cloudinaryImageId
            }
          />
        </div>
        <div className="restaurant-info">
          <h2 className="restaurant-title">{restaurantInfo?.name}</h2>
          <p>{restaurantInfo?.cuisines?.join(", ")}</p>
          <h4>{restaurantInfo?.avgRating} stars</h4>
          <h4>{restaurantInfo?.costForTwo}</h4>
        </div>
      </div>
      <div className="restaurant-menu">
        {restaurantMenu?.map((item) => {
          return item?.card?.card?.itemCards ? (
            <div key={item?.card?.card?.title} className="menu-category">
              <h1>{item?.card?.card?.title}</h1>
              <div className="menu-items">
                {item?.card?.card?.itemCards?.map((foodItem) => {
                  return (
                    <div key={foodItem?.card?.info?.id} className="food-item">
                      <div className="food-item-details">
                        <h2>{foodItem?.card?.info?.name}</h2>
                        <h4>Rs. {foodItem?.card?.info?.price / 100}</h4>
                        <p>{foodItem?.card?.info?.description}</p>
                      </div>
                      <div className="food-item-image">
                        <img
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                            foodItem?.card?.info?.imageId
                          }
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
