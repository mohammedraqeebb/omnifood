import React from "react";
import "./hero.styles.scss";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero">
        <div className="hero-details">
          <h1 className="hero-headline">
            A healthy meal
            <br /> delivered to your door,
            <br /> every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a className="start-eating" href="#?">
            Start eating well
          </a>
          <a className="learn-more" href="#?">
            Learn more &darr;
          </a>
          <div class="delivered-imgs">
            <img
              src="https://omnifood.dev/img/customers/customer-1.jpg"
              alt="Customer  1"
            />
            <img
              src="https://omnifood.dev/img/customers/customer-2.jpg"
              alt="Customer  2"
            />
            <img
              src="https://omnifood.dev/img/customers/customer-3.jpg"
              alt="Customer  3"
            />
            <img
              src="https://omnifood.dev/img/customers/customer-4.jpg"
              alt="Customer  4"
            />
            <img
              src="https://omnifood.dev/img/customers/customer-5.jpg"
              alt="Customer  5"
            />
            <img
              src="https://omnifood.dev/img/customers/customer-6.jpg"
              alt="Customer  6"
            />
            <span className="user-text">
              <span>250,000+ </span>meals delivered last year
            </span>
          </div>
        </div>
        <div className="hero-img-box">
          <img
            src="https://omnifood.dev/img/hero.webp"
            className="hero-img"
            alt="gallery1"
            height="70%"
            width="70%"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
