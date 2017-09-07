import React from 'react';
import PropTypes from 'prop-types';
import TravelMap from './travelMapComponent';

const MapComponent = (
  {
    markers,
    contextualMenu,
    showContextualMenu,
  }
) => (
  <TravelMap
    containerElement={<div className="map-container" style={{ height: '500px' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    markers={markers}
    contextualMenu={contextualMenu}
    onMapLoad={function noop() {}}
    onMapClick={function noop() {}}
    onMarkerRightClick={function noop() {}}
    onRightClickHandler={showContextualMenu}
  />
);

MapComponent.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      }).isRequired
    }).isRequired
  ).isRequired,
  contextualMenu: PropTypes.shape({ /* TODO */ }).isRequired,
  showContextualMenu: PropTypes.func.isRequired
};


export default MapComponent;
