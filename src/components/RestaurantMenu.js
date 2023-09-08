import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const restaurantInfo = restaurant?.cards[0]?.card?.card?.info;

  const restaurantMenu =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-main">
      <div className="container">
        <div className="restaurant-details">
          <div className="restaurant-image">
            <img src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} />
          </div>
          <div className="restaurant-info">
            <h2 className="title">{restaurantInfo?.name}</h2>
            <h3 className="rating">
              <span>&#10026;</span>
              {restaurantInfo?.avgRating}
            </h3>
            <p className="cuisines">{restaurantInfo?.cuisines?.join(", ")}</p>
            <p className="area">{restaurantInfo?.areaName}</p>
            <p className="cost">{restaurantInfo?.costForTwoMessage}</p>
          </div>
        </div>
        <div className="restaurant-menu">
          {restaurantMenu?.map((item) => {
            return item?.card?.card?.itemCards ? (
              <div key={item?.card?.card?.title} className="category-container">
                <h2 className="category">
                  {item?.card?.card?.title} (
                  {item?.card?.card?.itemCards?.length})
                </h2>
                <div className="menu-items">
                  {item?.card?.card?.itemCards?.map((foodItem) => {
                    return (
                      <div key={foodItem?.card?.info?.id} className="menu-item">
                        <div className="item-details">
                          <h2 className="title">
                            {foodItem?.card?.info?.name}
                          </h2>
                          <h3 className="price">
                            &#8377; {foodItem?.card?.info?.price / 100}
                          </h3>
                          <p className="description">
                            {foodItem?.card?.info?.description}
                          </p>
                        </div>
                        <div className="item-image">
                          <img
                            src={IMG_CDN_URL + foodItem?.card?.info?.imageId}
                          />
                          <button
                            className="add-btn"
                            onClick={() => {
                              addFoodItem(foodItem?.card?.info);
                            }}
                          >
                            Add
                          </button>
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
    </div>
  );
};

export default RestaurantMenu;
