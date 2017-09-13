import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-google-maps';
import MarkerDescription from './markerDescriptionComponent';

const MarkerComponent = (
  {
    marker,
    showMarkerDescription,
    removeMarker,
    hideMarkerDescription,
    updateMarkerPositionRequest
  }
) => {
  const onClickHandler = () => {
    showMarkerDescription(marker.id);
  };

  const updatePosition = (event) => {
    updateMarkerPositionRequest(marker.id, event.latLng.lat(), event.latLng.lng());
  };

  return (
    <Marker
      {...marker}
      draggable={true}
      onDragEnd={updatePosition}
      onDragStart={hideMarkerDescription}
      onClick={onClickHandler}
    >
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
  hideMarkerDescription: PropTypes.func.isRequired,
  updateMarkerPositionRequest: PropTypes.func.isRequired
};

export default MarkerComponent;
