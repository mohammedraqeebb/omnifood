import React from "react";
import "./meals.styles.scss";
const Meals = () => {
  return (
    <div className="meals-section">
      <p>Miles</p>
      <h1>Omnnifood AI chooses from 5,000+recipes</h1>
      <div className="meals">
        <div className="meals-card">
          <div className="image">
            <img src="https://omnifood.dev/img/meals/meal-1.jpg" alt="" />
          </div>
          <div className="meals-card-details">
            <span>Vegetarian</span>
            <h2>Japanese Gyozas</h2>
            <ul>
              <li>
                <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                <strong>650</strong> calories
              </li>
              <li>
                <ion-icon
                  class="meal-icon"
                  name="restaurant-outline"
                ></ion-icon>
                Nutriscore@ 74
              </li>
              <li>
                <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                <strong>4.9</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="meals-card">
          <div className="image">
            <img src="https://omnifood.dev/img/meals/meal-2.jpg" alt="" />
          </div>
          <div className="meals-card-details">
            <span>Vegan</span>
            <span style={{ backgroundColor: "#ffd43b" }}>Paleo</span>
            <h2>Avocado Salad</h2>
            <ul>
              <li>
                <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                <strong>400</strong> calories
              </li>
              <li>
                <ion-icon
                  class="meal-icon"
                  name="restaurant-outline"
                ></ion-icon>
                Nutriscore @9.2(531)
              </li>
              <li>
                <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                <strong>4.9</strong>rating(441)
              </li>
            </ul>
          </div>
        </div>
        <div className="meals-card">
          <h1>Works with any diet</h1>
          <ul className="list">
            <li>
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Vegetarian
            </li>
            <li>
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Vegan
            </li>
            <li>
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Pescatarian
            </li>
            <li>
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Gluten Free
            </li>
            <li>
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Lactose-free
            </li>
            <li>
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Keto
            </li>
            <li>
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Paleo
            </li>
            <li>
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Low FODMAP
            </li>
            <li>
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Kid-friendly
            </li>
          </ul>
        </div>
      </div>
      <a className="see-all" href="#?">
        See all recipes
      </a>
    </div>
  );
};

export default Meals;
