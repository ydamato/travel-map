import React from 'react';
import PropTypes from 'prop-types';
import { InfoWindow } from 'react-google-maps';

const MarkerDescription = props => (
  <InfoWindow onCloseClick={props.onCloseClickHandler}>
    <div>
      <h3>{props.title}</h3>
      <div>{props.description}</div>
    </div>
  </InfoWindow>
);

MarkerDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onCloseClickHandler: PropTypes.func.isRequired
};

export default MarkerDescription;
