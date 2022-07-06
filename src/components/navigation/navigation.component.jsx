import React from "react";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <img
          src="https://omnifood.dev/img/omnifood-logo.png"
          alt="omnifood"
          height={22}
          width={165}
        />
      </div>
      <div className="nav-links">
        <li>
          <a href="#?">How it works</a>
        </li>
        <li>
          <a href="#?">Meals</a>
        </li>
        <li>
          <a href="#?">Testimonials</a>
        </li>
        <li>
          <a href="#?">Pricing</a>
        </li>
        <li className="try-for-free">
          <a href="#?">Try for free</a>
        </li>
      </div>
    </div>
  );
};

export default Navigation;
