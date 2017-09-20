import React from 'react';
import TravelMap from './travelMapComponent';

const MapComponent = props => (
  <TravelMap
    containerElement={<div className="map-container" style={{ height: '500px' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    onMapLoad={function noop() {}}
    {...props}
  />
);

export default MapComponent;
