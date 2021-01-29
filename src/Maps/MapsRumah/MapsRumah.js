import React, {Component} from 'react';
import { svg } from './rumah';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';
// import { londonCycleMaxBounds as maxBounds } from './data';

const data = require('./MapsRumahData.json');
const config = require('../config.json')

const Map = ReactMapboxGl({
  accessToken: config.token,
  logoPosition: config.logoPosition,
  // minZoom: 8,
  // maxZoom: 15,
});

// Define layout to use in Layer component
const layoutLayer = { 'icon-image': 'rumah' };

//data
// Create an image for the Layer
const image = new Image();
image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(svg);
export const images: any = ['rumah', image];

export interface Station {
  id: string;
  name: string;
  position: number[];
  bikes: number;
  slots: number;
}

export interface StationDict {
  [id: string]: Station;
}

export interface State {
  fitBounds?: [[number, number], [number, number]];
  center: [number, number];
  zoom: [number];
  station?: Station;
  stations: StationDict;
}

export const flyToOptions = {
  speed: 0.8
};

export interface Props {
  // tslint:disable-next-line:no-any
  onStyleLoad?: (map: any) => any;
};

export const normalize = (station: any) => ({
  id: parseInt(station.id),
  name: station.name,
  position: [parseFloat(station.long), parseFloat(station.lat)],
  bikes: parseInt(station.nbBikes, 10),
  slots: parseInt(station.nbDocks, 10)
});

export default class MapsRumah extends Component {
    state : State = {
      fitBounds: undefined,
      center: [109.109970527, -7.52916347],
      station: undefined,
      stations: {}
    };

    componentWillMount(){
      var arr = data.map(normalize)
      .reduce((acc: StationDict, station) => {
        acc[station.id] = station;
        return acc;
      }, {});
      this.setState({
        stations: arr
      })
    }
  
    onDrag = () => {
      if (this.state.station) {
        this.setState({ station: undefined });
      }
    };
  
    onToggleHover(cursor: string, { map }: { map: any }) {
      map.getCanvas().style.cursor = cursor;
    }
  
    markerClick = (station: Station, { feature }: { feature: any }) => {
      this.setState({
        center: feature.geometry.coordinates,
        zoom: [14],
        station
      });
    };
  
    onStyleLoad = (map: any) => {
      const { onStyleLoad } = this.props;
      return onStyleLoad && onStyleLoad(map);
    };
  
    render() {
      const { fitBounds, center, stations, station } = this.state;
  
      return (
        <Map
          style={config.styles}
          containerStyle={config.container}
          onStyleLoad={this.onStyleLoad}
          fitBounds={fitBounds}
          // maxBounds={maxBounds}
          center={center}
          zoom={config.zoom}
          onDrag={this.onDrag}
          flyToOptions={flyToOptions}
        >
          <Layer type="symbol" id="marker" layout={layoutLayer} images={images}>
            {Object.keys(stations).map((stationK, index) => (
              <Feature
                key={stationK}
                onMouseEnter={this.onToggleHover.bind(this, 'pointer')}
                onMouseLeave={this.onToggleHover.bind(this, '')}
                onClick={this.markerClick.bind(this, stations[stationK])}
                coordinates={stations[stationK].position}
              />
            ))}
          </Layer>
          {station && (
            <Popup key={station.id} coordinates={station.position}>
              <div style={{
                background: 'white',
                color: '#3f618c',
                fontWeight: 400,
                padding: '5px',
                borderRadius: '2px',
              }}>
                <div>{station.name}</div>
                <div>
                  {station.bikes} bikes / {station.slots} slots
                </div>
              </div>
            </Popup>
          )}
        </Map>
      );
    }
}