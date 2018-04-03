import React from "react";

const LocationCard = () => {
  return (
    <div>
      <div
        className="card"
        style={{ width: "10rem", float: "left", margin: "2px" }}
      >
        <img
          className="card-img-top"
          src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=beach-boardwalk-boat-132037.jpg&fm=jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">Logan, UT</p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
