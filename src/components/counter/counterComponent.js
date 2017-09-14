import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ markers }) =>
  (
    <div className="sm-st clearfix">
      <span className="sm-st-icon st-red">
        <i className="fa fa-check-square-o" />
      </span>
      <div className="sm-st-info"><span>{markers.length}</span>
        <div>Total Markers</div>
      </div>
    </div>
  );

Counter.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      }).isRequired
    }).isRequired
  ).isRequired,
};

export default Counter;
