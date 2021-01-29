import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import React , { Component } from 'react';
import DrawControl from 'react-mapbox-gl-draw';

const config = require('../config.json');

const Map = ReactMapboxGl({
    accessToken: config.token,
    logoPosition: config.logoPosition
  })

const koordinat = [109.69529722278546, -7.274046779057944];

class Maps extends Component{
    render() {
        return (
            <Map
                style={config.styles}
                containerStyle={config.container}
                center={koordinat}
                zoom={config.zoom}
            >
                <Layer type="satelit" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={koordinat} />
                </Layer>
                <DrawControl 
                    onDrawCreate={()=>alert("done")} 
                    position='top-right' 
                    displayControlsDefault={false}
                    controls={{
                        polygon: true,
                        trash: true,
                        combine_features: true,
                        uncombine_features: true
                    }}
                />
            </Map>
        );
    }
}

export default Maps;