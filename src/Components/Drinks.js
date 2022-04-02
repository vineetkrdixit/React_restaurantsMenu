import React from "react";
import "./Drinks.css";

export default function Drinks(props) {
  let TypeOfDrink = props.rType;

  let addMenu = () => {
    console.log(props.rPrice);
    console.log(`you have ordered ${props.rDish} of INR ${props.rPrice}`);
  };

  return (
    <div className="container">
      <div className="drinkItems">
        <div
          className="col-sm-2 TypeDiv"
          style={{
            backgroundColor: props.rType === "Mocktail" ? "green" : "red",
          }}
        >
          <li>{props.rType}</li>
        </div>
        <div className="col-sm-9 TypeDish">
          <li>{props.rDish}</li>
        </div>
        <div className="col-sm-1 TypePrice">
          <li>
            <button className="drink-button" onClick={addMenu}>
              {props.rPrice}
            </button>
          </li>
        </div>
      </div>
    </div>
  );
}
