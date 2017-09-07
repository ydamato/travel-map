import React from 'react';
import PropTypes from 'prop-types';
import TravelMap from './travelMapComponent';

const MapComponent = props => (
  <TravelMap
    containerElement={<div className="map-container" style={{ height: '500px' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    onMapLoad={function noop() {}}
    {...props}
  />
);

MapComponent.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      }).isRequired
    }).isRequired
  ).isRequired,
  contextualMenu: PropTypes.shape({
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  showContextualMenu: PropTypes.func.isRequired,
  hideContextualMenu: PropTypes.func.isRequired,
  addMarker: PropTypes.func.isRequired,
  showMarkerDescription: PropTypes.func.isRequired,
  removeMarker: PropTypes.func.isRequired,
  hideMarkerDescription: PropTypes.func.isRequired
};


export default MapComponent;
