import React, { Component } from "react";

class NewLocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationText: "",
      imageLink: "",
      latitude: "",
      longitude: "",
      zoom: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.locationSubmit = this.locationSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  locationSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <div className="col-md-4" style={{ marginTop: "15px" }}>
        <form onSubmit={this.locationSubmit}>
          <div className="form-group">
            <label>Location Text</label>
            <input
              type="text"
              name="locationText"
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Image Link</label>
            <input
              type="text"
              name="imageLink"
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Latitude</label>
            <input
              type="number"
              step="0.0000000000000001"
              name="latitude"
              readOnly="true"
              //   onChange={this.handleInputChange}
              className="form-control"
              value={this.props.latitude}
            />
          </div>
          <div className="form-group">
            <label>Longitude</label>
            <input
              type="number"
              step="0.0000000000000001"
              name="longitude"
              readOnly="true"
              //   onChange={this.handleInputChange}
              className="form-control"
              value={this.props.longitude}
            />
          </div>
          <div className="form-group">
            <label>Zoom</label>
            <input
              type="number"
              name="zoom"
              readOnly="true"
              //   onChange={this.handleInputChange}
              className="form-control"
              value={this.props.zoom}
            />
          </div>
          <button
            className="btn btn-info"
            style={{ margin: "5px" }}
            type="submit"
          >
            Add Location
          </button>
        </form>
      </div>
    );
  }
}

export default NewLocationForm;
