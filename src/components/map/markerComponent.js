import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-google-maps';
import MarkerDescription from './markerDescriptionComponent';

const MarkerComponent = (
  {
    marker,
    showMarkerDescription,
    removeMarker,
    hideMarkerDescription
  }
) => {
  const onClick = () => {
    showMarkerDescription(marker.id);
  };

  return (
    <Marker {...marker} onClick={onClick}>
      {
        marker.isActive &&
        <MarkerDescription
          marker={marker}
          hideMarkerDescription={hideMarkerDescription}
          removeMarker={removeMarker}
        />
      }
    </Marker>
  );
};

MarkerComponent.propTypes = {
  marker: PropTypes.shape().isRequired,
  showMarkerDescription: PropTypes.func.isRequired,
  removeMarker: PropTypes.func.isRequired,
  hideMarkerDescription: PropTypes.func.isRequired
};

export default MarkerComponent;
