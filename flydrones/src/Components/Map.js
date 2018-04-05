import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAd3YVr3FLRS5i7igx4jZFuqc5KsAa5nlM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    ref={props.mapLoaded.bind(this)}
    defaultZoom={props.zoom}
    defaultCenter={props.center}
    zoom={props.zoom}
    onDragEnd={props.mapMoved}
    onZoomChanged={props.mapZoom}
    center={props.center}
    panTo={props.panTo}
  >
    {/* {props.isMarkerShown && (
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
      />
    )} */}

    {props.isMarkerShown &&
      props.markers !== undefined &&
      props.markers.map(x => (
        <Marker
          key={x.lat}
          position={{ lat: x.lat, lng: x.lng }}
          onClick={props.onMarkerClick}
        />
      ))}
  </GoogleMap>
));

const MyFancyComponent = props => {
  return (
    <div>
      <Map
        center={props.center}
        zoom={props.zoom}
        markers={props.markers}
        isMarkerShown={props.isMarkerShown}
        onMarkerClick={props.handleMarkerClick}
        mapLoaded={props.mapLoaded}
        mapMoved={props.mapMoved}
        mapZoom={props.mapZoom}
      />
      <div>
        <button
          className="btn btn-info"
          style={{ margin: "5px" }}
          onClick={props.updateMap}
        >
          Add Location
        </button>
      </div>
    </div>
  );
};

export default MyFancyComponent;
