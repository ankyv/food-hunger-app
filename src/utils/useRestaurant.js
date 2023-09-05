import { useState, useEffect } from "react";
import { MENU_DATA_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const response = await fetch(MENU_DATA_URL + resId);
    const json = await response.json();
    // console.log(json);
    setRestaurant(json?.data);
  }

  return restaurant;
};

export default useRestaurant;
