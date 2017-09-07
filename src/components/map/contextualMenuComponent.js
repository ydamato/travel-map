import React from 'react';
import PropTypes from 'prop-types';
import { InfoWindow } from 'react-google-maps';

const ContextualMenu = (
  {
    contextualMenu,
    addMarker,
    hideContextualMenu
  }
) => {
  const onClickHandler = () => {
    addMarker(contextualMenu.position);
  };

  return contextualMenu.isActive ?
    (
      <InfoWindow position={contextualMenu.position} onCloseClick={hideContextualMenu}>
        <button onClick={onClickHandler}>Add marker</button>
      </InfoWindow>
    ) : null;
};

// TODO
ContextualMenu.propTypes = {
  contextualMenu: PropTypes.shape({
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  hideContextualMenu: PropTypes.func.isRequired,
  addMarker: PropTypes.func.isRequired


};

export default ContextualMenu;
