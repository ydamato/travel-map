import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MarkerListComponent = ({
  marker,
  showMarkerDescription
}) => {
  const _showMarkerDescription = () => showMarkerDescription(marker.id);

  const markerClass = classNames({
    'list-group-item': true,
    'is-active': marker.isActive
  });
  return (
    <li className={markerClass}>
      <a href="javascript:void(0);" onClick={_showMarkerDescription}>
        {
          marker.isActive && <i className="material-icons">place</i>
        }
        {marker.title}
      </a>

    </li>
  );
};

MarkerListComponent.propTypes = {
  marker: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
  }).isRequired,
  showMarkerDescription: PropTypes.func.isRequired
};


export default MarkerListComponent;
