
import React from 'react';
import PropTypes from 'prop-types';

import { withGoogleMap, GoogleMap } from 'react-google-maps';
import MarkerContainer from '../../containers/markerContainer';

import ContextualMenu from '../../containers/contextualMenuContainer';

const TravelMap = withGoogleMap(({
  markers,
  onMapLoad,
  onMapClick,
  onRightClickHandler,
  contextualMenu

}) => {
  const defaultCenter = !markers.length ?
    {
      lat: -25.363882,
      lng: 131.044922
    } :
    markers[0].position;

  return (
    <GoogleMap
      ref={onMapLoad}
      defaultZoom={5}
      defaultCenter={defaultCenter}
      onClick={onMapClick}
      onRightClick={onRightClickHandler}
    >

      {
        contextualMenu.isActive &&
        <ContextualMenu position={contextualMenu.position} />
      }

      {
        markers.map(
          marker => <MarkerContainer marker={marker} key={marker.key} />
        )
      }
    </GoogleMap>
  );
});

TravelMap.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      }).isRequired
    }).isRequired
  ).isRequired,
  contextualMenu: PropTypes.shape({ /* TODO */ })
};

export default TravelMap;
