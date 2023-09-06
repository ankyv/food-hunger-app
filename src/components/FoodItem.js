import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ id, count, name, imageId, price }) => {
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
        <button>-</button>
        <p>{count}</p>
        <button>+</button>
      </div>
    </div>
  );
};

export default FoodItem;
