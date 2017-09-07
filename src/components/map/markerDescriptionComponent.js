import React from 'react';
import PropTypes from 'prop-types';
import { InfoWindow } from 'react-google-maps';

const MarkerDescription = (
  {
    removeMarker,
    hideMarkerDescription,
    marker
  }
) => {
  const onRemoveClickHandler = () => {
    removeMarker(marker.id);
  };

  return (
    <InfoWindow onCloseClick={hideMarkerDescription}>
      <div>
        <h3>{marker.title}</h3>
        <button onClick={onRemoveClickHandler}>Remove marker</button>
      </div>
    </InfoWindow>
  );
};

MarkerDescription.propTypes = {
  marker: PropTypes.shape().isRequired,
  removeMarker: PropTypes.func.isRequired,
  hideMarkerDescription: PropTypes.func.isRequired

};

export default MarkerDescription;
