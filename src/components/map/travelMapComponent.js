
import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import Marker from './markerComponent';
import ContextualMenu from './contextualMenuComponent';

const TravelMap = withGoogleMap((props) => {
  const defaultCenter = !props.markers.length ?
    {
      lat: -25.363882,
      lng: 131.044922
    } :
    props.markers[0].position;

  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={5}
      defaultCenter={defaultCenter}
      onClick={props.onMapClick}
      onRightClick={props.showContextualMenu}
    >

      <ContextualMenu
        contextualMenu={props.contextualMenu}
        hideContextualMenu={props.hideContextualMenu}
        addMarker={props.addMarker}

      />

      {
        props.markers.map(
          marker => (
            <Marker
              key={marker.id}
              marker={marker}
              showMarkerDescription={props.showMarkerDescription}
              removeMarker={props.removeMarker}
              hideMarkerDescription={props.hideMarkerDescription}
            />
          )
        )
      }
    </GoogleMap>
  );
});

TravelMap.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      }).isRequired
    }).isRequired
  ).isRequired,
  contextualMenu: PropTypes.shape({ /* TODO */ })
};

export default TravelMap;
