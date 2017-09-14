import React from 'react';
import PropTypes from 'prop-types';
import Marker from './markerComponent';

const MarkerListComponent = props => (
  <section className="panel panel-markerlist">
    <header className="panel-heading">Marker List</header>
    <div className="panel-body" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
      <ul className="list-group markerlist">
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
      </ul>
    </div>
  </section>
);

MarkerListComponent.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      }).isRequired
    }).isRequired
  ).isRequired,
  showMarkerDescription: PropTypes.func.isRequired,
  removeMarker: PropTypes.func.isRequired,
  hideMarkerDescription: PropTypes.func.isRequired
};


export default MarkerListComponent;
