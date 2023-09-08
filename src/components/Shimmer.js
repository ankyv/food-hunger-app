const Shimmer = () => {
  return (
    <div className="shimmer">
      <div className="container">
        <div className="search-container"></div>
        <div className="shimmer-list">
          {Array(20)
            .fill("")
            .map((e, index) => (
              <div key={index} className="shimmer-card">
                <div className="shimmer-image"></div>
                <div className="shimmer-details">
                  <div className="detail detail-1"></div>
                  <div className="detail detail-2"></div>
                  <div className="detail detail-3"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
