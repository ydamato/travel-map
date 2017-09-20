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
    addMarker(contextualMenu.position, contextualMenu.label);
  };

  return contextualMenu.isActive ?
    (
      <InfoWindow position={contextualMenu.position} onCloseClick={hideContextualMenu}>
        <div>
          <div>{contextualMenu.label}</div>
          <button onClick={onClickHandler}>Add marker</button>
        </div>
      </InfoWindow>
    ) : null;
};

ContextualMenu.propTypes = {
  contextualMenu: PropTypes.shape({
    position: PropTypes.shape.isRequired,
    label: PropTypes.string,
  }).isRequired,
  hideContextualMenu: PropTypes.func.isRequired,
  addMarker: PropTypes.func.isRequired
};

export default ContextualMenu;
