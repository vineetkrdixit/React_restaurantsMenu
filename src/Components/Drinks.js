import React from "react";
import "./Drinks.css";

export default function Drinks() {
  return (
    <div className="container">
      <div className="drinkItems">
        <div className="col-sm-2">
          <li>Mocktail</li>
        </div>
        <div className="col-sm-9">
          <li>BlueBeery</li>
        </div>
        <div className="col-sm-1">
          <li>
            <button className="drink-button">120</button>
          </li>
        </div>
      </div>
    </div>
  );
}
