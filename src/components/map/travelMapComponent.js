
import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import Marker from './markerComponent';
import ContextualMenu from './contextualMenuComponent';

const TravelMap = withGoogleMap((props) => {
  const defaultCenter = !props.markers.length ?
    {
      lat: 43.675819,
      lng: 7.289429
    } :
    props.markers[0].position;

  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={5}
      defaultCenter={defaultCenter}
      onClick={props.hideAllInfoWindows}
      onRightClick={props.showContextualMenuRequest}
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
              updateMarkerPositionRequest={props.updateMarkerPositionRequest}
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
  contextualMenu: PropTypes.shape({
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  showContextualMenuRequest: PropTypes.func.isRequired,
  hideContextualMenu: PropTypes.func.isRequired,
  addMarker: PropTypes.func.isRequired,
  showMarkerDescription: PropTypes.func.isRequired,
  removeMarker: PropTypes.func.isRequired,
  hideMarkerDescription: PropTypes.func.isRequired,
  containerElement: PropTypes.element.isRequired,
  mapElement: PropTypes.element.isRequired,
  onMapLoad: PropTypes.func.isRequired,
};

export default TravelMap;
