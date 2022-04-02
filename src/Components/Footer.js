import React, { Component } from "react";

export default class Footer extends Component {
  constructor() {
    super();
    this.name = {
      rName: "Vineet's Kitchen",
      rLoc: "Delhi",
    };
  }
  render() {
    return (
      <div>
        <h5
          style={{
            color: "darkred",
            textAlign: "center",
            bottom: "10px",
            position: "absolute",
            width: "100%",
          }}
        >
          Copyright 2022 -{this.name.rName} | {this.name.rLoc}
        </h5>
      </div>
    );
  }
}
