const ShimmerMenu = () => {
  return (
    <div className="shimmer-menu">
      <div className="container">
        <div className="restaurant-details">
          <div className="restaurant-image"></div>
          <div className="restaurant-info">
            <div className="detail detail-1"></div>
            <div className="detail detail-2"></div>
            <div className="detail detail-3"></div>
          </div>
        </div>
        <div className="restaurant-menu">
          <div className="category-container">
            <div className="category"></div>
            <div className="menu-items">
              {Array(10)
                .fill("")
                .map((e, index) => (
                  <div key={index} className="menu-item">
                    <div className="item-details">
                      <div className="detail detail-1"></div>
                      <div className="detail detail-2"></div>
                      <div className="detail detail-3"></div>
                    </div>
                    <div className="item-image"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerMenu;
