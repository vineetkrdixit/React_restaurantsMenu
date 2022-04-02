import React from "react";
import "./MainCourse.css";

export default function MainCourse(props) {
  return (
    <div className="container">
      <div className="maincourse">
        <div
          className="col-sm-2 TDiv"
          style={{ backgroundColor: props.rType === "Veg" ? "green" : "red" }}
        >
          <li>{props.rType}</li>
        </div>
        <div className="col-sm-9 DDiv">
          <li>{props.rDish}</li>
        </div>
        <div className="col-sm-1 PDiv">
          <li>
            <button className="Main-course-buttons">{props.rPrice}</button>
          </li>
        </div>
      </div>
    </div>
  );
}
