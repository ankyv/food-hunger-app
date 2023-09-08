import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  areaName,
  avgRating,
}) => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img
          className="restaurant-image"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="restaurant-details">
        <h2 className="title">{name}</h2>
        <h3 className="rating">
          <span>&#10026;</span>
          {avgRating}
        </h3>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="area">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
