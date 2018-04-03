import React, { Component } from "react";
import MyFancyComponent from "./Map";
import LocationList from "./LocationList";

class MainBody extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <MyFancyComponent />
          </div>
          <div className="col-md-4">
            <LocationList />
          </div>
        </div>
      </div>
    );
  }
}

export default MainBody;
