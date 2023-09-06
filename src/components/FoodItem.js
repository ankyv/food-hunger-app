import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { increaseItem, decreaseItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";

const FoodItem = ({ id, count, name, imageId, price }) => {
  const [totalPrice, setTotalPrice] = useState(count * price);

  const dispatch = useDispatch();

  const handleDecreaseItem = () => {
    if (count === 1) {
      dispatch(removeItem(id));
    } else {
      dispatch(decreaseItem(id));
      setTotalPrice(totalPrice - price);
    }
  };

  const handleIncreaseItem = () => {
    dispatch(increaseItem(id));
    setTotalPrice(totalPrice + price);
  };

  return (
    <div className="food-item">
      <div className="food-image">
        <img src={IMG_CDN_URL + imageId} />
      </div>
      <div className="food-details">
        <h2>{name}</h2>
        <h4>Rs. {price / 100}</h4>
        <h3>Total Price: {totalPrice / 100}</h3>
      </div>
      <div className="food-quantity">
        <button onClick={() => handleDecreaseItem()}>-</button>
        <p>{count}</p>
        <button onClick={() => handleIncreaseItem()}>+</button>
      </div>
    </div>
  );
};

export default FoodItem;
