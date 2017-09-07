import React from 'react';
import PropTypes from 'prop-types';
import { InfoWindow } from 'react-google-maps';

const ContextualMenu = ({
  addMarker,
  position,
  hideContextualMenu
}) => {
  const onClickHandler = () => {
    addMarker(position);
  };

  return (
    <InfoWindow position={position} onCloseClick={hideContextualMenu}>
      <button onClick={onClickHandler}>Add marker</button>
    </InfoWindow>
  );
};

ContextualMenu.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  hideContextualMenu: PropTypes.func.isRequired,
  addMarker: PropTypes.func.isRequired,
};

export default ContextualMenu;
