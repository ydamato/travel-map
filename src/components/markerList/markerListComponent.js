import React from 'react';
import PropTypes from 'prop-types';
import Marker from './markerComponent';

const MarkerListComponent = ({
  markers,
  showMarkerDescription
}) => (
  <section className="panel panel-markerlist">
    <header className="panel-heading">Marker List</header>
    <div className="panel-body" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
      <ul className="list-group markerlist">
        {
          markers.map(
            marker => (
              <Marker key={marker.id} marker={marker} showMarkerDescription={showMarkerDescription} />
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
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  showMarkerDescription: PropTypes.func.isRequired
};


export default MarkerListComponent;
