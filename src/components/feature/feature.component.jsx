import React from "react";
import "./feature.styles.scss";
const Feature = () => {
  return (
    <div className="feature-section">
      <div className="features">
        <h3 className="feature-text"> As featured in</h3>
        <div className="feature-images-container">
          <img src="https://omnifood.dev/img/logos/techcrunch.png" alt="" />
          <img
            src="https://omnifood.dev/img/logos/business-insider.png"
            alt=""
          />
          <img
            src="https://omnifood.dev/img/logos/the-new-york-times.png"
            alt=""
          />
          <img src="https://omnifood.dev/img/logos/forbes.png" alt="" />
          <img src="https://omnifood.dev/img/logos/usa-today.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
