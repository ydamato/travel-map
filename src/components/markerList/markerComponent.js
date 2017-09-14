import React from 'react';
import PropTypes from 'prop-types';

const MarkerComponent = (
  {
    marker,
    showMarkerDescription,
    removeMarker,
    hideMarkerDescription
  }
) => {
  const remove = () => {
    removeMarker(marker.id);
  };

  const expandOrCollapse = () => {
    if (marker.isActive) {
      hideMarkerDescription(marker.id);
    } else {
      showMarkerDescription(marker.id);
    }
  };

  const getTitleIcon = () => `glyphicon glyphicon-menu-${marker.isActive ? 'up' : 'down'}`;

  return (
    <li className="list-group-item">
      <button onClick={remove} className="pull-right label label-danger inline">X</button>
      <a href="javascript:void(0)" onClick={expandOrCollapse}>
        {marker.title} <span className={getTitleIcon()} />
      </a>
      <div>
        {marker.isActive && marker.description}
      </div>
    </li>

  );
};

MarkerComponent.propTypes = {
  marker: PropTypes.shape().isRequired,
  showMarkerDescription: PropTypes.func.isRequired,
  removeMarker: PropTypes.func.isRequired,
  hideMarkerDescription: PropTypes.func.isRequired
};

export default MarkerComponent;
