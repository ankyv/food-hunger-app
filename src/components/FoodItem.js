import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { increaseItem, decreaseItem, removeItem } from "../utils/cartSlice";

const FoodItem = ({ id, count, name, imageId, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="food-item">
      <div className="food-image">
        <img src={IMG_CDN_URL + imageId} />
      </div>
      <div className="food-details">
        <h2>{name}</h2>
        <h4>Rs. {price / 100}</h4>
      </div>
      <div className="food-quantity">
        <button
          onClick={() => {
            if (count === 1) {
              dispatch(removeItem(id));
            } else {
              dispatch(decreaseItem(id));
            }
          }}
        >
          -
        </button>
        <p>{count}</p>
        <button
          onClick={() => {
            dispatch(increaseItem(id));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
