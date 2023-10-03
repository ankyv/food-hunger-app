import { useState, useEffect } from "react";
import { DESKTOP_API_URL, MOBILE_API_URL } from "../constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState(null);

  useEffect(() => {
    if (window.screen.width < 1000) {
      getRestaurantList(MOBILE_API_URL);
    } else {
      getRestaurantList(DESKTOP_API_URL);
    }
  }, []);

  async function getRestaurantList(API_URL) {
    const response = await fetch(API_URL);
    const json = await response.json();

    let restaurantListData;

    for (let i = 0; i < json?.data?.cards?.length; i++) {
      restaurantListData =
        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurantListData !== undefined) {
        break;
      }
    }

    setRestaurantList(restaurantListData);
  }

  return restaurantList;
};

export default useRestaurantList;
