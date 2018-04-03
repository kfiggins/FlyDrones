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

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
    map: null,
    zoom: 12,
    center: { lat: 41.7603785, lng: -111.8480305 },
    markers: [{ lat: -34.397, lng: 150.644 }]
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

  updateMap = () => {
    this.setState({
      //   zoom: 18,
      //   center: { lat: -34.397, lng: 150.644 },
      markers: [...this.state.markers, { lat: 41.7603785, lng: -111.8480305 }]
    });
  };

  render() {
    return (
      <div>
        <Map
          center={this.state.center}
          zoom={this.state.zoom}
          markers={this.state.markers}
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
          mapLoaded={this.mapLoaded}
          mapMoved={this.mapMoved}
          mapZoom={this.mapZoom}
        />
        <div>
          <button
            className="btn btn-info"
            style={{ margin: "5px" }}
            onClick={this.updateMap}
          >
            Add Location
          </button>
        </div>
      </div>
    );
  }
}

export default MyFancyComponent;
