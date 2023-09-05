import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="restaurant-title">{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
