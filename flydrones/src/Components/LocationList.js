import React from "react";

const LocationList = props => {
  return (
    <div>
      {props.locations.map(x => (
        <div
          key={x.locationId}
          className="card"
          style={{ width: "10rem", float: "left", margin: "2px" }}
        >
          <img
            className="card-img-top"
            src={x.image}
            onClick={props.updateMap.bind(this, x)}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">{x.locationText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationList;
