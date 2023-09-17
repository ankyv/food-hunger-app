import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { increaseItem, decreaseItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";

const FoodItem = ({
  id,
  count,
  name,
  imageId,
  price,
  cartTotal,
  setCartTotal,
}) => {
  const [totalPrice, setTotalPrice] = useState(count * price);

  const dispatch = useDispatch();

  const handleDecreaseItem = () => {
    setCartTotal(cartTotal - price);

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
    setCartTotal(cartTotal + price);
  };

  return (
    <div className="food-item">
      <div className="food-image">
        <img src={IMG_CDN_URL + imageId} />
      </div>
      <div className="food-info">
        <h2 className="title">{name}</h2>
        <p>Rs. {(price / 100).toFixed(2)}</p>
      </div>
      <div className="food-quantity">
        <button onClick={() => handleDecreaseItem()}>-</button>
        <p>{count}</p>
        <button onClick={() => handleIncreaseItem()}>&#43;</button>
      </div>
      <div className="food-price">
        <p>Total Price : {(totalPrice / 100).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodItem;
