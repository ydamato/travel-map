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
  const collapse = () => {
    hideMarkerDescription(marker.id);
  };

  const expand = () => {
    showMarkerDescription(marker.id);
  };

  const remove = () => {
    removeMarker(marker.id);
  };

  return (
    <div
      style={{
        borderBottom: '1px solid black',
        padding: '10px',
        backgroundColor: marker.isActive ? '#FFF' : 'transparent'
      }}
    >
      <div className="markerTitle">
        {marker.title}
        {
          marker.isActive ?
            <button onClick={collapse}>Collapse</button> :
            <button onClick={expand}>Expand</button>
        }
      </div>
      {
        marker.isActive &&
        <div className="markerDescription">
          {marker.description}
          <button onClick={remove}> X </button>
        </div>
      }
    </div>
  );
};

MarkerComponent.propTypes = {
  marker: PropTypes.shape().isRequired,
  showMarkerDescription: PropTypes.func.isRequired,
  removeMarker: PropTypes.func.isRequired,
  hideMarkerDescription: PropTypes.func.isRequired
};

export default MarkerComponent;
