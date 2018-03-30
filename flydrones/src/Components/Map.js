import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const test = {
  width: "10px"
};
const AnyReactComponent = ({ text }) => (
  <div>
    {/* {text} */}
    <img
      style={test}
      src="https://cdn2.iconfinder.com/data/icons/flat-game-ui-buttons-icons-1/512/10-512.png"
      alt=""
    />
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.737,
      lng: -111.8338
    },
    zoom: 5
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAd3YVr3FLRS5i7igx4jZFuqc5KsAa5nlM"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={41.737} lng={-111.8338} text={"Logan, UT"} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
