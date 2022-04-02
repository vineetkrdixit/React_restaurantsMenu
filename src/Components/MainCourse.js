import React from "react";
import "./MainCourse.css";

export default function MainCourse() {
  return (
    <div className="container">
      <div className="maincourse">
        <div className="col-sm-2">
          <li>Veg</li>
        </div>
        <div className="col-sm-9">
          <li>Shahi Paneer</li>
        </div>
        <div className="col-sm-1">
          <li>
            <button className="Main-course-buttons"> 320</button>
          </li>
        </div>
      </div>
    </div>
  );
}
