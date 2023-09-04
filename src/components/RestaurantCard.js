const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
          cloudinaryImageId
        }
      />
      <h2 className="restaurant-title">{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
