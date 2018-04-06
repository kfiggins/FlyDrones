import React, { Component } from "react";
import MyFancyComponent from "./Map";
import LocationList from "./LocationList";
import NewLocationForm from "./NewLocationForm";
import RandomId from "random-id";

class MainBody extends Component {
  state = {
    locations: [
      {
        locationId: 1,
        image:
          "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=beach-boardwalk-boat-132037.jpg&fm=jpg",
        locationText: "Canada",
        location: { lat: 49.7603785, lng: -119.8480305 },
        zoom: 15
      },
      {
        locationId: 2,
        image:
          "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=beach-boardwalk-boat-132037.jpg&fm=jpg",
        locationText: "Somewhere, UT",
        location: { lat: -49.7603785, lng: 119.8480305 },
        zoom: 15
      }
    ],
    zoom: 12,
    center: { lat: 41.7603785, lng: -111.8480305 },
    markers: [{ lat: -34.397, lng: 150.644 }],
    isMarkerShown: false,
    map: null
  };

  updateMap = locations => {
    this.setState({
      zoom: locations.zoom,
      center: locations.location
      // markers: [...this.state.markers, { lat: 41.7603785, lng: -111.8480305 }]
    });
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
    var center = this.state.map.getCenter();
    console.log(center);
    this.setState({
      center: { lat: center.lat(), lng: center.lng() }
    });
  };

  mapLoaded = map => {
    if (this.state.map != null) return;

    this.setState({ map: map });
  };

  mapZoom = () => {
    console.log("zoom to " + JSON.stringify(this.state.map.getZoom()));
    this.setState({
      zoom: this.state.map.getZoom()
    });
  };

  handleSubmit = newLocation => {
    this.setState({
      locations: [
        ...this.state.locations,
        {
          locationId: RandomId(),
          image: newLocation.imageLink,
          locationText: newLocation.locationText,
          location: {
            lat: parseFloat(newLocation.latitude),
            lng: parseFloat(newLocation.longitude)
          },
          zoom: parseFloat(newLocation.zoom)
        }
      ]
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <MyFancyComponent
              zoom={this.state.zoom}
              center={this.state.center}
              markers={this.state.markers}
              isMarkerShown={this.state.isMarkerShown}
              map={this.state.map}
              mapMoved={this.mapMoved}
              mapLoaded={this.mapLoaded}
              mapZoom={this.mapZoom}
              delayedShowMarker={this.delayedShowMarker}
              handleMarkerClick={this.handleMarkerClick}
            />
          </div>
          <div className="col-md-4">
            <LocationList
              locations={this.state.locations}
              updateMap={this.updateMap}
            />
          </div>
        </div>
        <div className="container">
          <NewLocationForm
            handleSubmit={this.handleSubmit}
            latitude={this.state.center.lat}
            longitude={this.state.center.lng}
            zoom={this.state.zoom}
          />
        </div>
      </div>
    );
  }
}

export default MainBody;
