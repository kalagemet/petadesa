import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import React, { Component } from "react";
import DrawControl from "react-mapbox-gl-draw";
import { ContextType } from "../../Context";

const config = require("../config.json");
const streetjson = require("./Street.json");

const Map = ReactMapboxGl({
  accessToken: config.token,
  logoPosition: config.logoPosition,
});

const koordinat = [109.69529722278546, -7.274046779057944];

class StreetMaps extends Component {
  static contextType = ContextType;
  componentDidMount() {
    this.context.setTitle("PETA JALAN DESA");
    this.context.setSidebar("main-jalan");
  }

  componentWillUnmount() {
    this.context.setTitle("Peta App");
    this.context.setSidebar("main-menu");
  }

  _streetLoad = (draw, event) => {
    streetjson.features.map((data, i) => {
      if (draw) {
        draw.draw.add({
          type: data.geometry.type,
          key: i,
          coordinates: data.geometry.coordinates,
          id: data._id,
        });
      }
    });
  };

  render() {
    return (
      <Map
        style={config.styles}
        containerStyle={config.container}
        center={koordinat}
        zoom={[15]}
      >
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}
        />
        <DrawControl
          position="top-right"
          displayControlsDefault={false}
          controls={{
            line_string: true,
            trash: true,
          }}
          ref={this._streetLoad}
        />
      </Map>
    );
  }
}

export default StreetMaps;
