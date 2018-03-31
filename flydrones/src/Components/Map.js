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
    containerElement: <div style={{ height: `400px`, width: `50%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    ref={props.mapLoaded.bind(this)}
    defaultZoom={props.zoom}
    defaultCenter={props.center}
    onDragEnd={props.mapMoved}
    onZoomChanged={props.mapZoom}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
    map: null
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  mapMoved = () => {
    console.log("dragged to " + JSON.stringify(this.state.map.getCenter()));
  };

  mapLoaded = map => {
    if (this.state.map != null) return;

    this.setState({ map: map });
  };

  mapZoom = () => {
    console.log("zoom to " + JSON.stringify(this.state.map.getZoom()));
  };

  render() {
    return (
      <Map
        center={{ lat: 41.7603785, lng: -111.8480305 }}
        zoom={15}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        mapLoaded={this.mapLoaded}
        mapMoved={this.mapMoved}
        mapZoom={this.mapZoom}
      />
    );
  }
}

export default MyFancyComponent;
