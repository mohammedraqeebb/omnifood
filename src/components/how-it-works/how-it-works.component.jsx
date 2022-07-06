import React from "react";
import "./how-it-works.styles.scss";
const HowItWorks = () => {
  return (
    <div className="section-how-it-works">
      <div className="how-it-works">
        <div className="how-it-works-step">
          <div className="step-info">
            <h1>01</h1>
            <h3>Tell us what you like (and what not)</h3>
            <p>
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <div className="image">
            <img src="https://omnifood.dev/img/app/app-screen-1.png" alt="" />
          </div>
        </div>
        <div className="how-it-works-step">
          <div className="image">
            <img src="https://omnifood.dev/img/app/app-screen-1.png" alt="" />
          </div>
          <div className="step-info">
            <h1>02</h1>
            <h3>Approve your weekly meal plan</h3>
            <p>
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>
        </div>
        <div className="how-it-works-step">
          <div className="step-info">
            <h1>03</h1>
            <h3>Receive meals at convenient time</h3>
            <p>
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
          <div className="image">
            <img src="https://omnifood.dev/img/app/app-screen-3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
