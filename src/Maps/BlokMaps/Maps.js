import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import React, { Component } from "react";
import DrawControl from "react-mapbox-gl-draw";
import { ContextType } from "../../Context";

const config = require("../config.json");
const blokjson = require("./blok.json");

const Map = ReactMapboxGl({
  accessToken: config.token,
  logoPosition: config.logoPosition,
});

const koordinat = [109.69529722278546, -7.274046779057944];

class Maps extends Component {
  static contextType = ContextType;
  componentDidMount() {
    this.context.setTitle("Peta Blok Wilayah");
    this.context.setSidebar("main-blok");
  }

  componentWillUnmount() {
    this.context.setTitle("Peta App");
    this.context.setSidebar("main-menu");
  }

  _polygonLoad = (draw, event) => {
    blokjson.features.map((data, i) => {
      if (draw) {
        draw.draw.add({
          type: "Polygon",
          key: i,
          coordinates: data.geometry.coordinates,
          id: data._id,
        });
      }
    });
  };

  _polygonSelected = (polygon, event) => {
    if (polygon.features[0]) {
      this.context.setSidebar("detail-blok");
    } else {
      this.context.setSidebar("main-blok");
    }
  };

  render() {
    return (
      <Map
        style={config.styles}
        containerStyle={config.container}
        center={koordinat}
        zoom={config.zoom}
      >
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}
        />
        <DrawControl
          onDrawSelectionChange={this._polygonSelected}
          position="top-right"
          displayControlsDefault={false}
          controls={{
            polygon: true,
            trash: true,
            combine_features: true,
            uncombine_features: true,
          }}
          ref={this._polygonLoad}
        />
      </Map>
    );
  }
}

export default Maps;
