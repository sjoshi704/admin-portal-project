import React from 'react';
import "../Components/Loader.css"

const Loader = () => {
  return (
      <div className="d-flex justify-content-center">
        <div className="home-loader" id="waitloader">
          <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
    </div>
  );
}

export default Loader;
