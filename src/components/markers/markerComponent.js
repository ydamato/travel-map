import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-google-maps';

import MarkerDescription from './markerDescriptionComponent';

const MarkerComponent = (
  {
    marker,
    showMarkerDescription,
    hideMarkerDescription
  }
) => {
  const onClick = () => {
    showMarkerDescription(marker.key);
  };

  return (
    <Marker {...marker} onClick={onClick}>
      {
        marker.isActive &&
        <MarkerDescription
          title={marker.title}
          description={marker.description}
          onCloseClickHandler={hideMarkerDescription}
        />
      }
    </Marker>
  );
};

MarkerComponent.propTypes = {
  marker: PropTypes.shape().isRequired,
  showMarkerDescription: PropTypes.func.isRequired,
  hideMarkerDescription: PropTypes.func.isRequired
};

export default MarkerComponent;
